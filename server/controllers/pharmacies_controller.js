const pharmacies = require('../models/pharmacies_model');

const getPharmacies = async (req, res) => {
    const category = req.params.category;
    async function findPharmacies(category) {
        switch (category) {
            case 'all': {
                return pharmacies.getPharmacies();
            }

            case 'openinghours': {
                const day = req.query.day;
                const time = req.query.time;
                console.log({ day: day, time: time })
                return pharmacies.getPharmacies({ day: day, time: time });
            }

            // case 'search': {
            //     
            //     const keyword = req.query.keyword;
            //     if (keyword) {
            //         return result;
            //     } else {
            //         return;
            //     }
            // }

            default: {
                return pharmacies.getPharmacies();
            }
        };
    }

    const pharmacyList = await findPharmacies(category);
    if (!pharmacyList) {
        res.status(400).send({ error: 'Wrong Request' });
        return;
    }

    if (pharmacyList.length == 0) {
        res.status(200).json({ data: [] });
        return;
    }
    res.status(200).send({ data: pharmacyList });
};

module.exports = {
    getPharmacies,

};