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
                return pharmacies.getPharmacies({ day: day, time: time });
            }

            case 'query': {
                let requirement = { priceRange: true }
                if (req.query.lowest) { requirement.lowestPrice = req.query.lowest; }
                if (req.query.highest) { requirement.highestPrice = req.query.highest; }
                if (req.query.over) { requirement.leastProducts = req.query.over; }
                if (req.query.under) { requirement.mostProducts = req.query.under; }


                return pharmacies.getPharmacies(requirement);
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