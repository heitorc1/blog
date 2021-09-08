const sequelize = require('../db')
const { Post } = require('../../models')

const postController = {
    async newPost(req, res, next) {

        const { title, subtitle, body, author } = req.body

        // Validations
        if (!title || title.length <= 3)
            return res.status(500).send('Title must be at least 4 characters!')

        if (!subtitle || subtitle.length <= 3)
            return res.status(500).send('Subtitle must be at least 4 characters!')

        if (!body || body.length <= 144)
            return res.status(500).send('Body must be at least 144 characters!')

        if (!author || author.length <= 3)
            return res.status(500).send('Author must be at least 3 characters!')

        const post = await Post.create(req.body)
        res.send('New post created sucessfully!')

    },
    async loadPost(req, res, next) {
        const { id } = req.params

        const post = await Post.findByPk(id)
        if(post === null) {
            return res.status(500).send(`Post ${id} not found!`)
        } else {
            return res.status(200).send(JSON.stringify(post))
        }
    }

    
}

module.exports = postController
