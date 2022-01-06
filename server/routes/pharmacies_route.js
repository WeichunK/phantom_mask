const router = require('express').Router();
const {
    getPharmacies,

} = require('../controllers/pharmacies_controller');

router.route('/pharmacies/:category')
    .get(getPharmacies);

module.exports = router;