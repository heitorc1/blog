const { User } = require('../../models')

const userController = {
    async createUser(req, res, next) {
        const { firstName, lastName, email } = req.body

        const user = await User.create(req.body)

        return res.status(200).send('User created!')
    },

    async getUser(req, res, next) {
        const post = await User.findByPk(req.params.id)
        if(post === null) {
            return res.status(500).send(`Post ${id} not found!`)
        } else {
            return res.status(200).send(JSON.stringify(post))
        }
    }
}

module.exports = userController