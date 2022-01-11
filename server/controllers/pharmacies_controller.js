const pharmacies = require('../models/pharmacies_model');
const weekDay = new Set(['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'])

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
                if (time && !/(^[0-9][0-9]:[0-9][0-9]$)/.test(time)) {
                    return { error: 'invalid weekday or time' }
                }
                if (day && !weekDay.has(day)) {
                    return { error: 'invalid weekday or time' }
                }
                return pharmacies.getPharmacies({ day: day, time: time, openingHours: true });
            }

            case 'query': {
                let requirement = { priceRange: true }
                if (req.query.lowest) {
                    if (!/(^[0-9]+$)/.test(req.query.lowest)) {
                        return { error: 'invalid query parameter' }
                    }
                    requirement.lowestPrice = req.query.lowest;
                }
                if (req.query.highest) {
                    if (!/(^[0-9]+$)/.test(req.query.highest)) {
                        return { error: 'invalid query parameter' }
                    }
                    requirement.highestPrice = req.query.highest;
                }
                if (req.query.over) {
                    if (!/(^[0-9]+$)/.test(req.query.over)) {
                        return { error: 'invalid query parameter' }
                    }
                    requirement.leastProducts = req.query.over;
                }
                if (req.query.under) {
                    if (!/(^[0-9]+$)/.test(req.query.under)) {
                        return { error: 'invalid query parameter' }
                    }
                    requirement.mostProducts = req.query.under;
                }

                return pharmacies.getPharmacies(requirement);
            }

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
    if (pharmacyList.error) {
        res.status(400).send({ error: pharmacyList.error });
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