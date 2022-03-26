const express = require("express")
const router = express.Router()

const verificationToken = require("../middlewares/verifyToken")
const refreshToken = require("../controllers/RefreshToken")
const getAllusers = require("../controllers/getAllUsers")
const registerUsers = require("../controllers/registerUsers")
const loginUsers = require("../controllers/loginUsers")
const logoutUsers = require("../controllers/logoutUsers")

/** in this case , i use prefix api version v1 */

// routes get all users , pass to middleware first
router.get("/v1/users", verificationToken, getAllusers)

// route register users
router.post("/v1/users", registerUsers)

// route login users
router.post("/v1/login", loginUsers)

// route to re-generate access token \\ refresh token
router.get("/v1/token", refreshToken)

// route logout users
router.delete("/v1/logout", logoutUsers)

module.exports = router
module.exports = router