const db = require('./db.service');


async function getMultiple(page = 1) {
    const rows = await db.query('select * from post');
    console.log('rows', rows);
    return rows;
}

module.exports = {
    getMultiple
}