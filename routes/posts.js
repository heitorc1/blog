const express = require('express');
const router = express.Router();
const postController = require('../src/controller/PostsController')

router.post('/', postController.createPost)
router.get('/:id', postController.getPost)
router.put('/:id', postController.updatePost)
router.delete('/:id', postController.deletePost)


module.exports = router;
