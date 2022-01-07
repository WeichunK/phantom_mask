const { pool } = require('./mysqlcon');

const getTransactions = async (requirement = {}) => {
    const query = { sql: '', condition: '', groupby: '', having: '', orderby: '', limit: '', binding: [] };

    if (requirement.category === 'users') {
        query.sql = 'SELECT user_name, sum(transaction_amount) AS AMOUNT FROM transaction '
        query.groupby = 'GROUP BY user_name '
        query.orderby = 'order by AMOUNT DESC '

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
    }

    const transactionsQuery = query.sql + query.condition + query.groupby + query.having + query.orderby + query.limit;
    transactions = await pool.query(transactionsQuery, query.binding);
    return transactions[0];
}


module.exports = {
    getTransactions,
};