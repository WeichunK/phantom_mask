const masks = require('../models/masks_model');

const getMasks = async (req, res) => {
    let maskList
    let sort = (req.query.sort == 'price') ? 'price' : 'mask_name';
    maskList = await masks.getMasks({ pharmacy: req.query.pharmacy, sort: sort });

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