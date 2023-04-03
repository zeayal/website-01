const postsService = require('../services/posts.service')

const getAllPosts = (req, res, next) => {
    const posts = postsService.getMultiple(1);
    res.json({
        code: 0,
        message: "Welcome to Monster Backend",
    })
}

module.exports = {
    getAllPosts
}