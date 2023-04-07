const postsService = require('../services/posts.service')

const getAllPosts = async (req, res, next) => {
    const posts = await postsService.getMultiple(1);
    res.json({
        code: 0,
        message: "Welcome to Monster Backend",
        data: posts
    })
}

const createPost = async (req, res) => {
    // const { } = req.body;
    res.json({
        code: 0,
        message: "Welcome to Monster Backend",
        data: {}
    })
}

module.exports = {
    getAllPosts,
    createPost
}