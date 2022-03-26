const express = require("express")
const apps = express()
const cookiesParser = require("cookie-parser")
const cors = require("cors")
const checkConnection = require("./helpers/CheckDBConnected")
const router = require("./routes")
const dotenv = require("dotenv")

dotenv.config()

const PORT = process.env.PORT
const CALLBACK = () => console.log(`Server Running on port ${PORT}`)

// check connect db
checkConnection()

// credentials required and next js run in port 3000
apps.use(cors({ credentials: true, origin: "http://localhost:3000" }))
apps.use(express.json())
apps.use(cookiesParser())
apps.use(router)

apps.listen(PORT, CALLBACK)