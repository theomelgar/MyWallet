import dayjs from "dayjs"
import db from "../config/database.js"

// app.post("", async (req,res) => {
//     try {

//     } catch (error) {
//         console.log(error)
//         res.sendStatus(500)
//     }
// })

export async function register(req, res) {
    try {
        const data = await db.collection("register").find().toArray()

        return res.send(data.reverse())

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

// app.delete("/home", async (req, res) => {
//     try {

//     } catch (error) {
//         console.log(error)
//         res.sendStatus(500)
//     }
// })

export async function outcome(req, res) {
    const operation = req.body
    const checkSession = res.locals.session
    try {
        const time = dayjs().format("HH:mm:ss")
        if(Number(operation.value)<0) return res.sendStatus(422)

        await db.collection("register").insertOne({
            type: "outcome",
            value: operation.value,
            description: operation.description,
            time: time,
            idUser: checkSession.idUser
        })
        res.status(201).send("Outcome added")
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

// app.put("/editar-saida/:id", async (req, res) => {
//     try {

//     } catch (error) {
//         console.log(error)
//         res.sendStatus(500)
//     }
// })

export async function income(req, res) {
    const operation = req.body
    const checkSession = res.locals.session
    try {
        const time = dayjs().format("HH:mm:ss")
        if(isNaN(operation.value) || Number(operation.value)<0) return res.sendStatus(400)

        await db.collection("register").insertOne({
            type: "income",
            value: operation.value,
            description: operation.description,
            time: time,
            idUser: checkSession.idUser
        })
        res.status(201).send("Income added")

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

// app.put("/editar-entrada/:id", async (req, res) => {
//     try {

//     } catch (error) {
//         console.log(error)
//         res.sendStatus(500)
//     }
// })