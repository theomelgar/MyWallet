import dayjs from "dayjs"
import { ObjectId } from "mongodb"
import db from "../config/database.js"

export async function register(req, res) {
    try {
        const data = await db.collection("register").find().toArray()

        return res.send(data.reverse())

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export async function deleteOperation(req, res) {
    const { id } = req.params
    try {
        const exists = await db.collection("register").findOne({ _id: ObjectId(id) })
        if (!exists) return res.sendStatus(422)
        await db.collection("register").deleteOne({ _id: ObjectId(id) })
        res.status(202).send("Deleted")
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export async function outcome(req, res) {
    const operation = req.body
    const checkSession = res.locals.session
    try {
        const time = dayjs().format("HH:mm:ss")
        if (Number(operation.value) < 0) return res.sendStatus(422)

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

export async function updateOutcome(req, res) {
    const operation = req.body
    const { id } = req.params
    try {
        const exists = await db.collection("register").findOne({ _id: ObjectId(id) })
        if (!exists) return res.sendStatus(422)
        await db.collection("register")
            .updateOne({ _id: ObjectId(id) }, { $set: operation })
        res.send("Updated")
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export async function income(req, res) {
    const operation = req.body
    const checkSession = res.locals.session
    try {
        const time = dayjs().format("HH:mm:ss")
        if (isNaN(operation.value) || Number(operation.value) < 0) return res.sendStatus(400)

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

export async function updateIncome(req, res) {
    const operation = req.body
    const { id } = req.params
    try {
        const exists = await db.collection("register").findOne({ _id: ObjectId(id) })
        if (!exists) return res.sendStatus(422)
        await db.collection("register")
            .updateOne({ _id: ObjectId(id) }, { $set: operation })
        res.send("Updated")
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}