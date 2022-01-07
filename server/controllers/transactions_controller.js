const transactions = require('../models/transactions_model');

const getTransactions = async (req, res) => {
    const category = req.params.category;
    switch (category) {
        case 'users': {
            const start = req.query.start;
            const end = req.query.end;
            const limit = req.query.limit;
            transactionList = await transactions.getTransactions({ start: start, end: end, limit: limit, category: 'users' });
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