const db = require("./db.service");

async function getMultiple(page = 1) {
  const rows = await db.query(`
    SELECT post.id, post.title, post.content, post.author, 
    post.is_draft, post.is_public, post.created_at, update_at, post_category.name AS category FROM post
    JOIN post_category ON post.category_id = post_category.id
  `);
  console.log("rows", rows);
  return rows;
}

async function createPost(body) {
  const { categoryId, title, content, author, isDraft } = body;
  const rows = await db.query(
    "insert into post (category_id, title, content, author, is_draft) values (?, ?, ?, ?, ?)",
    [categoryId, title, content, author, isDraft]
  );
  if (rows.affectedRows === 1) {
    return rows.insertId;
  }
  return null;
}

async function deletePost(id) {
  const rows = await db.query("delete from post where id = ?", [id]);
  return rows;
}

async function updatePost(id, body) {
  const { categoryId, title, content, author, isDraft, isPublic } = body;
  const rows = await db.query(
    "update post set category_id = ?, title = ?, content = ?,  author = ?, is_draft = ?, is_public = ? where id = ?",
    [categoryId, title, content, author, isDraft, isPublic || true, id]
  );
  return rows;
}

async function queryPostDetailById(id) {
  const sql = "SELECT * FROM post WHERE id = ?";
  const rows = await db.query(sql, [id]);
  return rows;
}
module.exports = {
  getMultiple,
  createPost,
  deletePost,
  updatePost,
  queryPostDetailById,
};
