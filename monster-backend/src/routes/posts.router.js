const express = require('express');
const router = express.Router();

const postsController = require('../controllers/posts.controller');
console.log('postsController.getAllPosts', postsController.getAllPosts)
router.get('/', postsController.getAllPosts);

module.exports = router;