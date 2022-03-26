const Users = require("../models/Users")

const getAllUsers = async(request, response) => {
    try {
        const users = await Users.findAll({
            // modification response
            attributes: ["id", "email", "username", "education", "country"]
        })
        response.json({
            status: response.statusCode,
            api_version: "v1",
            message: "Success get all users",
            data: users,
            timestamp: new Date().toUTCString()
        })
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = getAllUsers