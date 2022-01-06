const fs = require('fs');
const { pool } = require('./server/models/mysqlcon');
const pharmacydata = JSON.parse(fs.readFileSync("./data/pharmacydata.json"));
const maskData = JSON.parse(fs.readFileSync("./data/maskData.json"));
const openingHourData = JSON.parse(fs.readFileSync("./data/openingHourData.json"));
const transactionData = JSON.parse(fs.readFileSync("./data/transactionData.json"));
const userdata = JSON.parse(fs.readFileSync("./data/userdata.json"));

async function main() {
    await pool.query('INSERT INTO pharmacy (pharmacy_name, cash_balance) VALUES ?', [pharmacydata.map(x => Object.values(x))]);
    await pool.query('INSERT INTO mask (mask_name, pharmacy_name, price) VALUES ?', [maskData.map(x => Object.values(x))]);
    await pool.query('INSERT INTO opening_hour (pharmacy_name, day, open, close) VALUES ?', [openingHourData.map(x => Object.values(x))]);
    await pool.query('INSERT INTO transaction (user_name, pharmacy_name, mask_name, transaction_amount, transaction_date) VALUES ?', [transactionData.map(x => Object.values(x))]);
    await pool.query('INSERT INTO user (user_name, cash_balance) VALUES ?', [userdata.map(x => Object.values(x))]);
    await pool.end();
}

if (require.main === module) {
    main();
}