const router = require('express').Router();
const {
    search,

} = require('../controllers/masks_controller');

router.route('/search')
    .get(search);

module.exports = router;