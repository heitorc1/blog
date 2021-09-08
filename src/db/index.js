const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './src/db/db.sqlite'
})

async () => {
    try {
        await sequelize.authenticate()
        console.log('Database connected!')
    } catch (error) {
        console.error('Unable to connect to database: ', error)
    }
}

module.exports = sequelize