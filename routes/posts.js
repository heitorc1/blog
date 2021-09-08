const express = require('express');
const router = express.Router();
const postController = require('../src/controller/PostsController')

router.post('/', postController.newPost)
router.get('/:id', postController.loadPost)


module.exports = router;
