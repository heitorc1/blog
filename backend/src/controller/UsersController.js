const { User } = require('../db/models')

const userController = {
    async createUser(req, res, next) {
        const { firstName, lastName, email } = req.body

        const user = await User.create(req.body)

        return res.status(200).send(JSON.stringify(user))
    },

    async getUser(req, res, next) {
        const user = await User.findByPk(req.params.id)
        if(user === null) {
            return res.status(500).send(`User ${id} not found!`)
        } else {
            return res.status(200).send(JSON.stringify(user))
        }
    },

    async updateUser(req, res, next) {
        const { firstName, lastName, email } = req.body

        const user = await User.findByPk(req.params.id)
        if(user === null) {
            return res.status(500).send(`User ${id} not found!`)
        } else {
            user.firstName = firstName
            user.lastName = lastName
            user.email = email

            user.save()
            return res.status(200).send(JSON.stringify(user))
        }
    },

    async deleteUser(req, res, next) {
        const user = await User.findByPk(req.params.id)
        if(user === null) {
            return res.status(500).send(`User ${id} not found!`)
        } else {
            user.destroy()
            return res.status(200).send('User deleted!')
        }
    }


}

module.exports = userController