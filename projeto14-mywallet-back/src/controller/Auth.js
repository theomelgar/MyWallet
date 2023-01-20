import joi from "joi"
import bcrypt from "bcrypt"
import { v4 as uuidV4 } from 'uuid'
import db from "../config/database.js"
import { stripHtml } from "string-strip-html"
import { userSchema } from "../schemas/AuthSchema.js"


export async function signUp(req, res) {
    const { name, email, password, confirmPassword } = req.body
    const { error } = userSchema.validate({ name, email, password, confirmPassword }, { abortEarly: false })
    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }
    const passwordHashed = bcrypt.hashSync(password, 10)
    const checkUser = await db.collection("users").findOne({ email })
    if(checkUser) return res.status(422).send("Email already taken!")
    try {
        await db.collection("users")
            .insertOne({ name, email, password: passwordHashed })
        res.status(201).send("User created")
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function signIn(req, res) {
    const { email, password } = req.body
    try {
        const checkUser = await db.collection("users").findOne({ email })
        if (!checkUser) return res.status(400).send("User or password incorrect")
        const isCorrectPassword = bcrypt.compareSync(password, checkUser.password)
        if (!isCorrectPassword) return res.status(400).send("User or password incorrect")
        const token = uuidV4()
        await db.collection("sessions").insertOne({ idUser: checkUser._id, token })
        res.status(200).send(token)
    } catch (error) {
        res.status(500).send(error.message)
    }
}


