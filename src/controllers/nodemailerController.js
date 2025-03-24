import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()

const email = process.env.ENV_MAIL
const password = process.env.ENV_PASSWORD

export const sendMail = async(req, res) => {
    const {name, mail, text} = req.body
    
    try{
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth:{
                user: email,
                pass: password
            },
        })

        let mailOptions = {
            from: email,
            to: email,
            subject: `Recibiste un nuevo mensaje de: ${name}`,
            text: `Correo de contacto: ${mail}, y su mensaje para ti es: ${text}`
        }

        await transporter.sendMail(mailOptions)
        res.status(200).json({message: "Mensaje enviado exitosamente"})
    }catch (e){
        console.log(`Error al enviar el mensaje ${e}`)
        res.status(500).json({error: `Error al enviar el mensaje ${e}`})
    }   
}