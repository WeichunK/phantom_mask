const { pool } = require('./mysqlcon');

const getPharmacies = async (requirement = {}) => {
    const query = { sql: '', condition: '', groupby: '', having: '', binding: [] };
    if (requirement.day != null || requirement.time != null) {
        query.sql = 'SELECT pharmacy_name, day, open, close FROM opening_hour '
        if (requirement.day != null && requirement.time != null) {
            query.condition = 'WHERE day = ? AND open <= ? and close >= ?;'
            query.binding.push(requirement.day);
            query.binding.push(requirement.time);
            query.binding.push(requirement.time);
        } else if (requirement.day != null) {
            query.condition = 'WHERE day = ?;'
            query.binding.push(requirement.day);
        } else {
            query.condition = 'WHERE open <= ? and close >= ?;'
            query.binding.push(requirement.time);
            query.binding.push(requirement.time);
        }
    } if (requirement.priceRange) {
        query.sql = 'SELECT pharmacy_name, count(mask_name) AS product_count FROM mask '
        query.groupby = 'group by pharmacy_name '
        if (requirement.lowestPrice && requirement.highestPrice && requirement.leastProducts && requirement.mostProducts) {
            query.condition = 'WHERE price BETWEEN ? AND ? '
            query.binding.push(requirement.lowestPrice);
            query.binding.push(requirement.highestPrice);
            query.having = 'HAVING product_count > ? AND product_count < ? '
            query.binding.push(requirement.leastProducts);
            query.binding.push(requirement.mostProducts);
        } else {
            if (requirement.lowestPrice && requirement.highestPrice) {
                query.condition = 'WHERE price BETWEEN ? AND ? '
                query.binding.push(requirement.lowestPrice);
                query.binding.push(requirement.highestPrice);
            } else {
                if (requirement.lowestPrice) {
                    query.condition = 'WHERE price >= ? '
                    query.binding.push(requirement.lowestPrice);
                } else if ((requirement.highestPrice)) {
                    query.condition = 'WHERE price <= ? '
                    query.binding.push(requirement.highestPrice);
                }
            }
            if (requirement.leastProducts && requirement.mostProducts) {
                query.having = 'HAVING product_count > ? AND product_count < ? '
                query.binding.push(requirement.leastProducts);
                query.binding.push(requirement.mostProducts);
            } else {
                if (requirement.leastProducts) {
                    query.having = 'HAVING product_count > ? '
                    query.binding.push(requirement.leastProducts);
                } else if (requirement.mostProducts) {
                    query.having = 'HAVING product_count < ? '
                    query.binding.push(requirement.mostProducts);
                }
            }
        }
    } else {
        query.sql = 'SELECT * FROM pharmacy '
    }
    const pharmaciesQuery = query.sql + query.condition + query.groupby + query.having;
    pharmacies = await pool.query(pharmaciesQuery, query.binding);
    return pharmacies[0];
};

module.exports = {
    getPharmacies,
};