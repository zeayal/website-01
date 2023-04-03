const db = require('./db.service');


async function getMultiple(page = 1) {
    const rows = await db.query('select * from posts');
    console.log('rows', rows[0]);
    return rows;
}

module.exports = {
    getMultiple
}