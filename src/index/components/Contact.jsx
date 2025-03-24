import { useState } from "react"
import axios from "axios"

export function Contact (){
    const [formData, setFormData] = useState({
        name: "",
        mail: "",
        text: "",
    })
    const [status, setStatus] = useState(null)

    const handleChange= (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit= async (e) =>{
        e.preventDefault()
        setStatus("Enviado...")

        try{
            await axios.post("http://localhost:3000/mailSend", formData)
            setStatus("Mensaje enviado con exito")
            setFormData({name: "", mail: "", text: ""})
        }catch(err){
            setStatus(`Error al enviar el mensaje ${err}`)
        }
    }

    return(
        <>
            <h1 className="text-center text-[2.5rem] text-[#332B2B] mt-5">Contactame</h1>
            <div className="w-[25%] h-[3px] bg-[#332B2B] my-2 mx-auto"></div>
            <form onSubmit={handleSubmit} className="max-w-[95%] w-full h-auto min-h-[400px] m-6 p-6 flex flex-col gap-4 border rounded-2xl shadow-xl">
                <label htmlFor="name">Nombre</label>
                <input 
                    className="w-[40%] h-[2rem] border border-[#332B2B] rounded-lg p-2" 
                    type="text" 
                    placeholder="Escribe tu nombre..."
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="mail">Email</label>
                <input 
                    className="w-[40%] h-[2rem] border border-[#332B2B] rounded-lg p-2" 
                    type="email" 
                    placeholder="Escribe tu correo..."
                    name="mail"
                    value={formData.mail}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="text">Descripcion</label>
                <textarea 
                    className="w-[50%] h-[7rem] border border-[#332B2B] rounded-lg p-2 resize-none" 
                    type="text" 
                    placeholder="Escribe un breve resumen del proyecto que quieres hacer..."
                    name="text"
                    alue={formData.text}
                    onChange={handleChange}
                    required
                />

                {status && <p className="text-center bg-gray-700 text-white rounded-xl">{status}</p>}
                <button type="submit" className="w-[50%] h-[3rem] p-2 bg-[#7B0800] text-white rounded-xl duration-300 ease-in-out hover:bg-[#9B3A34] hover:scale-[105%]">Enviar</button>
            </form>


        </>
    )
}