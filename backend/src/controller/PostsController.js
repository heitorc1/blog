const { Post } = require('../db/models')

const postController = {
    async createPost(req, res, next) {

        const { title, subtitle, body, author } = req.body

        /* 
        * Validations
        */
        if (!title || title.length <= 3)
            return res.status(500).send('Title must be at least 4 characters!')

        if (!subtitle || subtitle.length <= 3)
            return res.status(500).send('Subtitle must be at least 4 characters!')

        if (!body || body.length <= 144)
            return res.status(500).send('Body must be at least 144 characters!')

        if (!author || author.length <= 3)
            return res.status(500).send('Author must be at least 3 characters!')

        /* 
        * Validation passed, create post
        */
        const post = await Post.create(req.body)
        res.status(200).send(JSON.stringify(post))

    },
    async getPost(req, res, next) {
        const { id } = req.params

        const post = await Post.findByPk(id)
        if (post === null) {
            return res.status(500).send(`Post ${id} not found!`)
        } else {
            return res.status(200).send(JSON.stringify(post))
        }
    },

    async updatePost(req, res, next) {
        const { id } = req.params
        const { title, subtitle, body, author } = req.body
        const post = await Post.findByPk(id)
        if (post === null) {
            return res.status(500).send(`Post ${id} not found!`)
        } else {
            /* 
            * Validations
            */
            if (!title || title.length <= 3) {
                return res.status(500).send('Title must be at least 4 characters!')
            } else {
                post.title = title
            }
    
            if (!subtitle || subtitle.length <= 3) {
                return res.status(500).send('Subtitle must be at least 4 characters!')
            } else {
                post.subtitle = subtitle
            }
    
            if (!body || body.length <= 144) {
                return res.status(500).send('Body must be at least 144 characters!')
            } else {
                post.body = body
            }
    
            if (!author || author.length <= 3) {
                return res.status(500).send('Author must be at least 3 characters!')
            } else {
                post.author = author
            }
            
            /* 
            * Validation passed, update post
            */
            await post.save()
            res.status(200).send(JSON.stringify(post))
        }

    },

    async deletePost(req, res, next) {
        const { id } = req.params
        const post = await Post.findByPk(id)
        if (post === null) {
            return res.status(500).send(`Post ${id} not found!`)
        } else {
            await post.destroy()
            res.status(200).send('Post deleted!')
        }
    }
}

module.exports = postController
