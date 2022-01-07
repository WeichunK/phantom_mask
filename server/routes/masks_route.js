const router = require('express').Router();
const {
    getMasks,

} = require('../controllers/masks_controller');

router.route('/masks')
    .get(getMasks);

module.exports = router;