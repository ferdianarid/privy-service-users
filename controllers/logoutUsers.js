const Users = require("../models/Users")

const logoutUsers = async(request, response) => {
    // check refresh token in cookies
    const refreshtoken = request.cookies.refreshtoken

    // check if not yet refresh token
    if (!refreshtoken) return response.sendStatus(204)

    // check refresh token on browser match with db
    const users = await Users.findAll({
        where: {
            refresh_token: refreshtoken
        }
    })

    // check any user with that refresh token or not || if not return 204
    if (!users) return response.sedStatus(204)

    // get users id for reset refresh token on DB to null
    const usersId = users[0].id

    // reset token
    await Users.update({ refresh_token: null }, {
        where: {
            id: usersId
        }
    })

    // clear refresh token on cookies
    response.clearCookie("refreshtoken")

    // return status code success ok
    response.json({
        status: response.statusCode,
        message: "Successfully Logout"
    })
}

module.exports = logoutUsers