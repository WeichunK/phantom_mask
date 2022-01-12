const { pool } = require('./mysqlcon');

const getTransactions = async (requirement = {}) => {
    const query = { sql: '', condition: '', groupby: '', having: '', orderby: '', limit: '', binding: [] };

    if (requirement.category === 'users') {
        query.sql = 'SELECT user_name, sum(transaction_amount) AS amount FROM transaction '
        query.groupby = 'GROUP BY user_name '
        query.orderby = 'ORDER BY AMOUNT DESC '
    } else if (requirement.category === 'daterange') {
        query.sql = 'SELECT (case when sum(piece) is null then 0 else sum(piece) end) AS quantity, (case when sum(transaction_amount) is null then 0 else sum(transaction_amount) end) AS amount FROM transaction '
    }

    if (requirement.start && requirement.end) {
        query.condition = 'where transaction_date between ? and ? '
        query.binding.push(requirement.start);
        query.binding.push(requirement.end);
    } else if (requirement.start) {
        query.condition = 'where transaction_date >= ? '
        query.binding.push(requirement.start);
    } else if (requirement.end) {
        query.condition = 'where transaction_date <= ? '
        query.binding.push(requirement.end);
    }

    if (requirement.limit) {
        query.limit = 'limit ?'
        query.binding.push(parseInt(requirement.limit));
    }

    const transactionsQuery = query.sql + query.condition + query.groupby + query.having + query.orderby + query.limit;
    transactions = await pool.query(transactionsQuery, query.binding);
    return transactions[0];
}

const postTransaction = async (transaction) => {
    const conn = await pool.getConnection();
    try {
        await conn.query('START TRANSACTION');
        let queryStr
        let user
        let mask
        let pharmacy
        queryStr = 'SELECT * FROM user WHERE user_name = ?';
        [user] = await conn.query(queryStr, [transaction.userName]);
        if (user.length === 0) {
            return { error: 'invalid user name!' }
        }
        queryStr = 'SELECT * FROM mask WHERE mask_name = ? AND pharmacy_name = ?';
        [mask] = await conn.query(queryStr, [transaction.maskName, transaction.pharmacyName]);
        if (mask.length === 0) {
            return { error: 'invalid mask name or pharmacy name!' }
        }
        queryStr = 'SELECT * FROM user WHERE user_name = ? FOR UPDATE';
        [user] = await conn.query(queryStr, [transaction.userName]);
        if (parseFloat(user[0].cash_balance) < parseFloat(mask[0].price)) {
            console.log('not enough cash!')
            await conn.query('COMMIT');
            await conn.release();
            return { error: 'not enough cash!' };
        }
        queryStr = 'SELECT * FROM pharmacy WHERE pharmacy_name = ? FOR UPDATE';
        [pharmacy] = await conn.query(queryStr, [transaction.pharmacyName]);

        queryStr = 'UPDATE user SET cash_balance = ? WHERE user_name = ?';
        [updateUserResult] = await conn.query(queryStr, [parseFloat(user[0].cash_balance) - parseFloat(mask[0].price), transaction.userName]);

        queryStr = 'UPDATE pharmacy SET cash_balance = ? WHERE pharmacy_name = ?';
        [updatePharmacyResult] = await conn.query(queryStr, [parseFloat(pharmacy[0].cash_balance) + parseFloat(mask[0].price), transaction.pharmacyName]);

        queryStr = 'INSERT INTO transaction (user_name, pharmacy_name, mask_name, piece, transaction_amount, transaction_date) VALUES (?)';
        [InsertTransactionResult] = await conn.query(queryStr, [[transaction.userName, transaction.pharmacyName, transaction.maskName, mask[0].piece, mask[0].price, transaction.transactionDate]]);

        queryStr = 'SELECT * FROM transaction WHERE id = ?';
        [InsertedTransaction] = await conn.query(queryStr, [InsertTransactionResult.insertId]);

        await conn.query('COMMIT');
        return InsertedTransaction[0];
    } catch (error) {
        console.log(error);
        await conn.query('ROLLBACK');
        return { error };
    } finally {
        await conn.release();
    }
}

module.exports = {
    getTransactions,
    postTransaction,
};