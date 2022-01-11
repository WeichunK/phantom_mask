const transactions = require('../models/transactions_model');

const getTransactions = async (req, res) => {
    const category = req.params.category;
    const start = req.query.start;
    const end = req.query.end;
    if (start && !/(^[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}$)/.test(start)) {
        res.status(400).send({ error: 'invalid query parameter' });
        return;
    }
    if (end && !/(^[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}$)/.test(end)) {
        res.status(400).send({ error: 'invalid query parameter' });
        return;
    }
    switch (category) {
        case 'users': {
            limit = req.query.limit;
            transactionList = await transactions.getTransactions({ start: start, end: end, limit: limit, category: 'users' });
            break;
        }
        case 'daterange': {
            transactionList = await transactions.getTransactions({ start: start, end: end, category: 'daterange' });
            break;
        }
    }
    if (!transactionList) {
        res.status(400).send({ error: 'Wrong Request' });
        return;
    }
    if (transactionList.length == 0) {
        res.status(200).json({ data: [] });
        return;
    }
    res.status(200).send({ data: transactionList });
}

const postTransaction = async (req, res) => {
    try {
        const transaction = {
            userName: req.body.userName,
            pharmacyName: req.body.pharmacyName,
            maskName: req.body.maskName,
            transactionDate: new Date(),
        }
        const postTransactionResult = await transactions.postTransaction(transaction)
        if (postTransactionResult.error === 'invalid user name!' || postTransactionResult.error === 'invalid mask name or pharmacy name!') {
            res.status(400).send({ error: postTransactionResult.error });
            return;
        }
        if (postTransactionResult.error) {
            res.status(403).send({ error: postTransactionResult.error });
            return;
        }
        res.status(200).send({
            data: {
                transaction: postTransactionResult
            }
        })
        return;
    } catch (err) {
        console.log('err', err.message)
        res.status(403).send({ error: err.message });
        return;
    }
}

module.exports = {
    getTransactions,
    postTransaction,

};