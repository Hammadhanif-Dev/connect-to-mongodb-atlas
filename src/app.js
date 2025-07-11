import express from "express"
import cors from "cors"
import cookiesParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true //  malumat (liks: facebook, google, etc.) ka name, password, etc.
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public")) 

export { app }
