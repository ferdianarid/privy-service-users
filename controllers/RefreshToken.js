const jwt = require("jsonwebtoken")
const Users = require("../models/Users")

const refreshToken = async(request, response) => {
    try {
        // get refresh token from cookies
        const refreshtoken = request.cookies.refreshtoken

        // if not yet, return unauthenticated
        if (!refreshtoken) return response.sendStatus(401)

        // get users data who match with that refresh token
        const users = await Users.findAll({
            where: {
                refresh_token: refreshtoken
            }
        })

        // if not any users match with that token, unauthenticated
        if (!users) return response.sendStatus(403)

        // verify refresh token with secret key
        jwt.verify(refreshtoken, process.env.REFRESH_TOKEN_SECRET_KEY, (error, decode) => {
            if (error) return response.sendStatus(403)

            const usersId = users[0].id
            const email = users[0].email
            const username = users[0].username

            // generate access token
            const accesstoken = jwt.sign({ usersId, email, username }, process.env.ACCESS_TOKEN_SECRET_KEY, {
                expiresIn: "15s"
            })

            // return access token
            response.json({ accesstoken })
        })
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = refreshToken