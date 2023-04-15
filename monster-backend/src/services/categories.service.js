const { query } = require("./db.service");

const queryAllCategories = async () => {
  const sql = `SELECT * FROM post_category`;
  return await query(sql);
};

// 创建分类
const queryCreateCategory = async ({ name }) => {
  const sql = `INSERT INTO post_category (name) VALUES (?)`;
  return await query(sql, [name]);
};

// 更新分类
const queryUpdateCategory = async ({ id, name }) => {
  const sql = `UPDATE post_category SET name = ? WHERE id = ?`;
  return await query(sql, [name, id]);
};

// 查询详情
const queryCategoryById = async (id) => {
  const sql = `SELECT * FROM post_category WHERE id = ?`;
  return await query(sql, [id]);
};

// 删除分类
const queryDeleteCategoryById = async (id) => {
  const sql = `DELETE FROM post_category WHERE id = ?`;
  return await query(sql, [id]);
};

module.exports = {
  queryAllCategories,
  queryCreateCategory,
  queryUpdateCategory,
  queryCategoryById,
  queryDeleteCategoryById,
};
