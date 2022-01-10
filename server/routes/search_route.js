const router = require('express').Router();
const {
    search,

} = require('../controllers/search_controller');

router.route('/search/:category')
    .get(search);

module.exports = router;