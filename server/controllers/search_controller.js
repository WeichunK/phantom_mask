const masks = require('../models/masks_model');
const pharmacies = require('../models/pharmacies_model');

const search = async (req, res) => {
    const category = req.params.category;
    let searchResults;
    switch (category) {
        case 'mask': {
            searchResults = await masks.search({ keywords: req.query.keywords || '' });
            break;
        }
        case 'pharmacy': {
            searchResults = await pharmacies.search({ keywords: req.query.keywords || '' });
            break;
        }
    }
    if (!searchResults) {
        res.status(400).send({ error: 'Wrong Request' });
        return;
    }
    if (searchResults.length == 0) {
        res.status(200).json({ data: [] });
        return;
    }
    res.status(200).send({ data: searchResults });
};

module.exports = {
    search,

};