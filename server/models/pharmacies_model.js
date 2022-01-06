const { pool } = require('./mysqlcon');

const getPharmacies = async (requirement = {}) => {
    const query = { sql: '', condition: '', binding: [] };
    if (requirement.day != null || requirement.time != null) {
        console.log('requirement', requirement)
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
    } else {
        query.sql = 'SELECT * FROM pharmacy '
    }
    const pharmaciesQuery = query.sql + query.condition;
    pharmacies = await pool.query(pharmaciesQuery, query.binding);
    return pharmacies[0];
};

module.exports = {
    getPharmacies,
};