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

module.exports = {
    getTransactions,

};