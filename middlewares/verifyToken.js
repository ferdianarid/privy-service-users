const jwt = require("jsonwebtoken")

const verificationToken = (request, response, next) => {
    // get authorization value from request
    const authenticationHeaders = request.headers["authorization"]

    // check type like Bearer or other
    const tokenTypes = authenticationHeaders && authenticationHeaders.split(" ")[0]

    // get token and store in token variable
    const token = authenticationHeaders && authenticationHeaders.split(" ")[1]

    // if not yet token, return 401 unauthenticated
    if (token == null) return response.sendStatus(401)

    // if yet, pass to step verify by jwt, with secret key
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, decoded) => {
        // unauthenticated
        if (err) return response.sendStatus(401)

        request.email = decoded.email

        // if pass, call next function middleware
        next()
    })
}

module.exports = verificationToken