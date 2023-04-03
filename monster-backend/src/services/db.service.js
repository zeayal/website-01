const { Client } = require('pg');

const dbConfig = require('../configs/db.config');
const params = {
    user: dbConfig.db_username,
    database: dbConfig.db_name,
    password: dbConfig.db_password,
    host: dbConfig.db_host,
    port: dbConfig.db_port,
}
console.log('dbConfig', params)
const client = new Client(params)
client.connect();


async function query(sql, params) {
    const res = await client.query(sql);
    return res.rows;
}

module.exports = {
    query
}