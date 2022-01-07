const router = require('express').Router();
const {
    getTransactions,

} = require('../controllers/transactions_controller');

router.route('/transactions/:category')
    .get(getTransactions);

module.exports = router;