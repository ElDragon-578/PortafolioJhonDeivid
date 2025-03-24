import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import { sendMail } from "./controllers/nodemailerController.js"

dotenv.config()


const PORT = process.env.PORT || 3000

const app =express()
app.use(cors())
app.use(express.json())

app.post("/mailSend", sendMail)

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Error interno del servidor" });
})

app.listen(PORT, () => {
    console.log(`Server listen in port ${PORT}`)
})

