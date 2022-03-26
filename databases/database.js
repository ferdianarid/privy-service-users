const { Sequelize } = require("sequelize")

// privyuser is db name, root is username, "" is password
const database = new Sequelize("privyuser", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = database