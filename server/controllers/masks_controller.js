const masks = require('../models/masks_model');

const getMasks = async (req, res) => {
    let maskList
    let sort
    req.query.sort == 'price' ? sort = 'price' : sort = 'mask_name';
    if (req.query.pharmacy) {
        const pharmacy = req.query.pharmacy;
        maskList = await masks.getMasks({ pharmacy: pharmacy, sort: sort });
    } else {
        maskList = await masks.getMasks({ sort: sort });
    }
    if (!maskList) {
        res.status(400).send({ error: 'Wrong Request' });
        return;
    }
    if (maskList.length == 0) {
        res.status(200).json({ data: [] });
        return;
    }
    res.status(200).send({ data: maskList });
};

module.exports = {
    getMasks,

};