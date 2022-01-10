const transactions = require('../models/transactions_model');

const getTransactions = async (req, res) => {
    const category = req.params.category;
    switch (category) {
        case 'users': {
            start = req.query.start;
            end = req.query.end;
            limit = req.query.limit;
            transactionList = await transactions.getTransactions({ start: start, end: end, limit: limit, category: 'users' });
            break;
        }
        case 'daterange': {
            start = req.query.start;
            end = req.query.end;
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