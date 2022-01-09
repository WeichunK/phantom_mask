require('dotenv').config();
const mysql = require('mysql2/promise');
const env = process.env.NODE_ENV;
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_DATABASE_TEST } = process.env;

const mysqlConfig = {
    development: { // for localhost development
        host: DB_HOST,
        user: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_DATABASE,
    },
    test: { // for automation testing (command: npm run test)
        host: DB_HOST,
        user: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_DATABASE_TEST
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