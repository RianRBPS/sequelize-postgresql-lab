const Sequelize = require('sequelize')
const sequelize = new Sequelize('crud', 'root', 'password', {
    dialect: 'postgres',
    host: 'localhost',
    port: 3306
})

module.exports = sequelize;

