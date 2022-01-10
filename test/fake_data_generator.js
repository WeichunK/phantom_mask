require('dotenv').config();
const { NODE_ENV } = process.env;
const {
    pharmacydata,
    maskData,
    openingHourData,
    userdata,
    transactionData,
} = require('./fake_data');
const { pool } = require('../server/models/mysqlcon');

async function _createFakePharmacy(conn) {
    return await conn.query('INSERT INTO pharmacy (pharmacy_name, cash_balance) VALUES ?', [pharmacydata.map(x => Object.values(x))]);
}

async function _createFakeMask(conn) {
    return await conn.query('INSERT INTO mask (mask_name, pharmacy_name, piece, price) VALUES ?', [maskData.map(x => Object.values(x))]);
}

async function _createFakeOpeningHour(conn) {
    return await conn.query('INSERT INTO opening_hour (pharmacy_name, day, open, close) VALUES ?', [openingHourData.map(x => Object.values(x))]);
}

async function _createFakeUser(conn) {
    return await conn.query('INSERT INTO user (user_name, cash_balance) VALUES ?', [userdata.map(x => Object.values(x))]);
}

async function _createFakeTransaction(conn) {
    return await conn.query('INSERT INTO transaction (user_name, pharmacy_name, mask_name, piece, transaction_amount, transaction_date) VALUES ?', [transactionData.map(x => Object.values(x))]);
}


async function createFakeData() {
    if (NODE_ENV !== 'test') {
        console.log('Not in test env');
        return;
    }
    const conn = await pool.getConnection();
    await conn.query('START TRANSACTION');
    await conn.query('SET FOREIGN_KEY_CHECKS = ?', 0);
    await _createFakePharmacy(conn);
    await _createFakeMask(conn);
    await _createFakeOpeningHour(conn);
    await _createFakeUser(conn);
    await _createFakeTransaction(conn);
    await conn.query('SET FOREIGN_KEY_CHECKS = ?', 1);
    await conn.query('COMMIT');
    await conn.release();
}

async function truncateFakeData() {
    if (NODE_ENV !== 'test') {
        console.log('Not in test env');
        return;
    }

    const truncateTable = async (table) => {
        const conn = await pool.getConnection();
        await conn.query('START TRANSACTION');
        await conn.query('SET FOREIGN_KEY_CHECKS = ?', 0);
        await conn.query(`TRUNCATE TABLE ${table}`);
        await conn.query('SET FOREIGN_KEY_CHECKS = ?', 1);
        await conn.query('COMMIT');
        await conn.release();
        return;
    };

    const tables = ['pharmacy', 'mask', 'opening_hour', 'user', 'transaction'];
    for (let table of tables) {
        await truncateTable(table);
    }

    return;
}

async function closeConnection() {
    return await pool.end();
}

async function main() {
    await truncateFakeData();
    await createFakeData();
    await closeConnection();
}

// execute when called directly.
if (require.main === module) {
    main();
}

module.exports = {
    createFakeData,
    truncateFakeData,
    closeConnection,
};