const bcrypt = require("bcrypt");
const userService = require("../services/user.service");

const login = async (req, res) => {
  const { username, password } = req.body;
  const rows = await userService.findUserByUsername(username);
  console.log("rows", rows);
  console.log('req.session.user',req.session? req.session.user: 'res.session not exist');
  if (rows.length === 0) {
    return res.json({ code: -1, message: "用户名不存在1", data: null });
  }
  const user = rows[0];
  if (user.password !== password) {
    return res.json({ code: -1, message: "用户名或密码不正确", data: null });
  }
  req.session.user = {
    id: user.id,
    username: user.username,
    is_admin: user.is_admin,
  };
  res.json({ code: 0, message: "登录成功", data: null });
};

module.exports = {
  login,
};
