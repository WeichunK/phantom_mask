const { pool } = require('./mysqlcon');

const getMasks = async (requirement = {}) => {
    const query = { sql: '', condition: '', binding: [], order: `ORDER BY ${requirement.sort}` };
    query.sql = 'SELECT mask_name, pharmacy_name, price FROM mask '
    if (requirement.pharmacy) {
        query.condition = 'WHERE pharmacy_name = ? '
        query.binding.push(requirement.pharmacy);
        query.binding.push(requirement.sort);
    } else {
        query.binding.push(requirement.sort);
    }
    const masksQuery = query.sql + query.condition + query.order;
    masks = await pool.query(masksQuery, query.binding);
    return masks[0];
};

module.exports = {
    getMasks,
};