const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres', 'rian', 'admin', {
    dialect: 'postgres',
    host: 'localhost',
    logging: console.log,
})

module.exports = sequelize;

