require('dotenv').config();
const mysql = require('mysql2/promise');
const env = process.env.NODE_ENV;
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

const mysqlConfig = {
    development: { // for localhost development
        host: DB_HOST,
        user: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_DATABASE,
    }
};

let mysqlEnv = mysqlConfig[env];
mysqlEnv.waitForConnections = true;
mysqlEnv.connectionLimit = 20;

const pool = mysql.createPool(mysqlEnv);

module.exports = {
    mysql,
    pool
};