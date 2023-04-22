const express = require('express');
const router = express.Router();
const authMiddleWare = require("../middleware/authMiddleWare");

const postsController = require('../controllers/posts.controller');
router.get('/', postsController.getAllPosts);
router.post('/', authMiddleWare, postsController.createPost);
router.delete('/:id', authMiddleWare, postsController.deletePost);
router.put('/:id', authMiddleWare, postsController.updatePost);
router.get('/:id', postsController.getPostById);

module.exports = router;