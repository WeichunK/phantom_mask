const router = require('express').Router();
const {
    getTransactions,
    postTransaction,

} = require('../controllers/transactions_controller');

router.route('/transactions/:category')
    .get(getTransactions);

router.route('/transactions')
    .post(postTransaction);

module.exports = router;