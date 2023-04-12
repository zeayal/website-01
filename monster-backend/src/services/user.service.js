const db = require("./db.service");

const findUserByUsername = async (username) => {
  const sql = `SELECT * FROM user WHERE username = ?`;
  const rows = await db.query(sql, [username]);
  return rows;
};

const getAllUsers = async () => {
  const sql = `SELECT id, username, is_admin FROM user`;
  const rows = await db.query(sql);
  return rows
}

module.exports = {
    findUserByUsername,
    getAllUsers
}