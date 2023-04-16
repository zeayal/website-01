const postsService = require("../services/posts.service");

const getAllPosts = async (req, res, next) => {
  const posts = await postsService.getMultiple(1);
  console.log("posts", posts);
  res.json({
    code: 0,
    message: "获取文章列表成功",
    data: posts,
  });
};

// post 创建post接口
const createPost = async (req, res) => {
  // const { } = req.body;
  console.log("req.body", req.body);
  const insertId = await postsService.createPost(req.body);
  if (insertId) {
    res.json({
      code: 0,
      message: "创建成功",
      data: insertId,
    });
  } else {
    res.json({
      code: -1,
      message: "创建失败",
      data: insertId,
    });
  }
};

// delete 删除post 接口
const deletePost = async (req, res) => {
  const { id } = req.params;
  const rows = await postsService.deletePost(id);
  if (rows.affectedRows === 1) {
    res.json({
      code: 0,
      message: "删除成功",
      data: rows,
    });
  } else {
    res.json({
      code: -1,
      message: "删除失败",
      data: rows,
    });
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const rows = await postsService.updatePost(id, req.body);
  if (rows.affectedRows === 1) {
    res.json({
      code: 0,
      message: "更新成功",
      data: rows,
    });
  } else {
    res.json({
      code: -1,
      message: "更新失败",
      data: rows,
    });
  }
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const rows = await postsService.queryPostDetailById(id);
 
  if (rows.length) {
    res.json({
      code: 0,
      message: "获取文章详情成功",
      data: rows[0],
    });
  } else {
    res.json({
      code: -1,
      message: "获取文章详情失败",
      data: null,
    });
  }
};

module.exports = {
  getAllPosts,
  createPost,
  deletePost,
  updatePost,
  getPostById,
};
