const categoryService = require("../services/categories.service");

const getAllCategories = async (req, res) => {
  const rows = await categoryService.queryAllCategories();
  console.log('rows', rows);
  if (rows?.length > -1) {
    return res.json({
      code: 0,
      message: "获取分类成功",
      data: rows,
    });
  }

  res.json({
    code: -1,
    message: "获取分类失败",
    data: null,
  });
};

// 创建分类
const createCategory = async (req, res) => {
  const { name } = req.body;
  const rows = await categoryService.queryCreateCategory({ name });
  if (rows?.affectedRows > 0) {
    return res.json({
      code: 0,
      message: "创建分类成功",
      data: rows.insertId,
    });
  }
  res.json({
    code: -1,
    message: "创建分类失败",
    data: null,
  });
};

// 更新分类
const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const rows = await categoryService.queryUpdateCategory({ id, name });
  if (rows?.affectedRows > 0) {
    return res.json({
      code: 0,
      message: "更新分类成功",
      data: rows.affectedRows,
    });
  }
  res.json({
    code: -1,
    message: "更新分类失败",
    data: null,
  });
};

// 获取分类详情
const getCategoryById = async (req, res) => {
  const { id } = req.params;
  const rows = await categoryService.queryCategoryById(id);
  console.log('rows', rows);
  if (rows.length) {
    return res.json({
      code: 0,
      message: "获取分类详情成功",
      data: rows[0],
    });
  }
  res.json({
    code: -1,
    message: "获取分类详情失败",
    data: null,
  });
};

// 删除分类, 如果分类下已经存在文章, 则不允许删除
const deleteCategoryById = async (req, res) => {
  const { id } = req.params;
  const rows = await categoryService.queryDeleteCategoryById(id);
  if (rows.affectedRows) {
    return res.json({
      code: 0,
      message: "删除分类成功",
      data: rows,
    });
  }
  res.json({
    code: -1,
    message: "删除分类失败",
    data: null,
  });
};

module.exports = {
  getAllCategories,
  createCategory,
  updateCategory,
  getCategoryById,
  deleteCategoryById,
};
