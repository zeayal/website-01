const userService = require("../services/user.service");

const getAllUsers = async (req, res) => {
  const rows = await userService.getAllUsers();
  if (Array.isArray(rows)) {
    res.json({
      code: 0,
      message: "获取用户列表成功",
      data: rows,
    });
  } else {
    res.json({ code: -1, message: "获取用户列表失败", data: null });
  }
};

module.exports = {
  getAllUsers,
};
