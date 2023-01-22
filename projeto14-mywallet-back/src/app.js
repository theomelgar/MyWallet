import express from "express"
import cors from "cors"
import authRouter from "./routes/AuthRoutes.js"
import operationsRouter from "./routes/OperationsRoutes.js"

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT

//routes
app.use([ authRouter, operationsRouter ])

// app.post("", async (req,res) => {
//     try {

//     } catch (error) {
//         console.log(error)
//         res.sendStatus(500)
//     }
// })

app.listen(PORT, () => console.log("Server online in " + PORT)) 