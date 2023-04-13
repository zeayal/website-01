const db = require('./db.service');

const findUserByName = async (username) => {
    const rows = await db.query('select * from user where username = ?', [username]);
    return rows
}

module.exports = {
    findUserByName
}