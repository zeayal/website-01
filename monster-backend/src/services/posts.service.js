const db = require('./db.service');


async function getMultiple(page = 1) {
    const rows = await db.query('select * from post');
    console.log('rows', rows);
    return rows;
}

async function createPost(body) {
    const { categoryId, title, content, author } = body;
    const rows = await db.query('insert into post (category_id, title, content, author) values (?, ?, ?, ?)', [categoryId, title, content, author])
    if (rows.affectedRows === 1) {
        return rows.insertId;
    }
    return null;
}

async function deletePost(id) {
    const rows = await db.query('delete from post where id = ?', [id]);
    return rows;
}

async function updatePost(id, body) {
    const { categoryId, title, content, author } = body;
    const rows = await db.query('update post set category_id = ?, title = ?, content = ?, author = ? where id = ?', [categoryId, title, content, author, id]);
    return rows;
    // const rows = await db.query('update post set category_id = ?, title = ?, content = ?, author = ? where id = ?', [categoryId, title, content, author, id]);
    // return rows;
}

module.exports = {
    getMultiple,
    createPost,
    deletePost,
    updatePost
}