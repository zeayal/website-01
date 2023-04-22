const mysql = require('mysql2');
const dbConfig = require('../configs/db.config');
const params = {
    user: dbConfig.db_username,
    database: dbConfig.db_name,
    password: dbConfig.db_password,
    host: dbConfig.db_host,
    port: dbConfig.db_port,
}
console.log('dbConfig', params)
const connection = mysql.createConnection(params);
connection.connect();


// 将 connection.query 封装成 promise
function query(sql, args) {
    return new Promise((resolve, reject) => {
        connection.query(sql, args, (error, result, fields) => {
            if (error) {
                reject(error);
            } else {
                console.log('result', result)
                resolve(result);
            }
        })
    })
}

module.exports = {
    query
}