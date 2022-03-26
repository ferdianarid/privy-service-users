// const Users = require("../models/Users")

// Running and generating table user automaticaly
const database = require("../databases/database")

const checkConnection = () => {
    try {
        database.authenticate()
        console.log(`Database Connected`)
            // Users.sync()
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = checkConnection