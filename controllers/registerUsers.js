const bcrypt = require('bcrypt')
const Users = require("../models/Users")

const registerUsers = async(request, response) => {
    try {
        // store request body value and destructure 
        const { username, email, password, confirmPassword, education, country, phone, cover, avatar } = request.body

        // check password match with confirm password or not 
        if (password !== confirmPassword) return response.status(403).json({ message: "Password Confirmation Failed" })

        // generate salt
        const salt = await bcrypt.genSalt(12)

        // hashing password with salt
        const hashPassword = await bcrypt.hash(password, salt)

        // insert / post data into database 
        const users = await Users.create({
            username,
            email,
            password: hashPassword,
            education,
            country,
            phone,
            cover,
            avatar
        })

        response.json({
            status: response.statusCode,
            api_version: "v1",
            message: "Users succesfully registered",
            data: users,
            createdAt: new Date().toUTCString()
        })
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = registerUsers