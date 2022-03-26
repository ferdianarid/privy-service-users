const bcrypt = require('bcrypt')
const Users = require("../models/Users")
const jwt = require('jsonwebtoken')

const loginUsers = async(request, response) => {
    try {
        // check users email match with data email in the db or not
        const users = await Users.findAll({
            where: {
                email: request.body.email
            }
        })

        // compare between input password with password in db using jwt 
        const matchingPassword = await bcrypt.compare(request.body.password, users[0].password)

        // if not match return not match
        if (!matchingPassword) return response.status(400).json({ message: "Password not match" })

        // if match , will be pass into this phase, get email, id and username
        const usersId = users[0].id
        const email = users[0].email
        const username = users[0].username

        // generated id, email, username with jwt and returning access token
        const accesstoken = jwt.sign({ email, usersId, username }, process.env.ACCESS_TOKEN_SECRET_KEY, {
            expiresIn: "15s"
        })

        // generate refresh token also
        const refreshtoken = jwt.sign({ email, usersId, username }, process.env.REFRESH_TOKEN_SECRET_KEY, {
            expiresIn: "50s"
        })

        // update null refresh token in db with refresh token before
        await Users.update({ refresh_token: refreshtoken }, {
            where: {
                id: usersId
            }
        })

        // set refresh token into coookies browser and can access only with http request server ( httpOnly)
        response.cookie("refreshtoken", refreshtoken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        })

        response.json({
            status: response.statusCode,
            message: "Successfully generated",
            accesstoken: accesstoken
        })

    } catch (error) {
        console.log(error.message)
    }
}

module.exports = loginUsers