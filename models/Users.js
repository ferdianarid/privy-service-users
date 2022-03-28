const { Sequelize } = require("sequelize")
const database = require("../databases/database")

const { DataTypes } = Sequelize

const Users = database.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    about: {
        type: DataTypes.TEXT
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    career: {
        type: DataTypes.STRING
    },
    country: {
        type: DataTypes.STRING
    },
    certification: {
        type: DataTypes.STRING
    },
    education: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    cover: {
        type: DataTypes.STRING
    },
    avatar: {
        type: DataTypes.STRING
    },
    refresh_token: {
        type: DataTypes.TEXT
    }
}, {
    freezeTableName: true
})

module.exports = Users