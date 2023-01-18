import express from "express"
import cors from "cors"
import {MongoClient, ObjectId} from "mongodb"
import dotenv from "dotenv"
import joi from "joi"
import dayjs from "dayjs"
import {stripHtml} from "string-strip-html"

dotenv.config()
const mongoClient = new MongoClient(process.env.DATABASE_URL)
let db
try {
    await mongoClient.connect()
    
} catch (error) {
    console.log("Server Error")
}
const app = express()
app.use(express.json())
app.use(cors())
db = mongoClient.db()

const PORT = process.env.PORT

app.listen(PORT, () => console.log("Server online in " + PORT)) 