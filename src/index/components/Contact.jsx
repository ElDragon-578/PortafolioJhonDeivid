import { useEffect, useState, useRef } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import axios from "axios"

export function Contact (){
    const [formData, setFormData] = useState({
        name: "",
        mail: "",
        text: "",
    })
    const [status, setStatus] = useState(null)
    const [statusBackground, setStatusBackground] = useState("bg-gray-500")
    const [copy, setCopy] = useState(false)
    const [displaytext, setDisplayText] = useState("")
    const [visible, setVisible] = useState(false)
    const [validCaptcha, setValidCaptcha] = useState(null)
    const [validUser, setValidUser] = useState(false)
    const captchaRef = useRef(null)
    const ref = useRef(null)
    const email ="Jhondeividnunez@gmail.com"

    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.01 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);


    useEffect(()=>{
        let i = 0
        const interval = setInterval(()=>{
            setDisplayText(email.slice(0, i+1))
            i++
            if(i >= email.length) clearInterval(interval)
        }, 100)

        return () => clearInterval(interval)
    },[visible])

    const handleChange= (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value})
        if(captchaRef.current.getValue()){
            setValidCaptcha(true)
        }
    }

    const handleSubmit= async (e) =>{
        e.preventDefault()

        if(captchaRef.current.getValue()){
            setStatus("Enviado...")
            setStatusBackground("bg-gray-500")

            setValidUser(true)
            setValidCaptcha(true)
    
            try{
                await axios.post("http://localhost:3000/mailSend", formData)
                setStatus("Mensaje enviado con exito")
                setStatusBackground("bg-green-500")
                setFormData({name: "", mail: "", text: ""})
            }catch(err){
                setStatus(`Error al enviar el mensaje ${err}`)
                setStatusBackground("bg-red-500")
            }

        }else{
            setStatus("Captcha no valido")
            setStatusBackground("bg-red-500")

            setValidUser(false)
            setValidCaptcha(false)
        }
    }

    const copyText = () =>{
        navigator.clipboard.writeText(email)
        setCopy(true)
        setTimeout(() => setCopy(false), 7000)
    }

    return(
        <>
            <h1 className="text-center text-[2.5rem] text-[#332B2B] mt-5" id="contact">Contáctame</h1>
            <div className="w-[25%] h-[3px] bg-[#332B2B] my-2 mx-auto"></div>
            <form onSubmit={handleSubmit} className="max-w-[87%] w-full h-auto min-h-[400px] mx-auto m-6 p-6 lg:flex  gap-4 border rounded-2xl shadow-xl" >
                <div className="w-full h-auto flex flex-col gap-y-4 p-6">
                    <label htmlFor="name">Nombre</label>
                    <input 
                        id="name"
                        className="w-full h-8 border border-[#332B2B] rounded-lg p-2" 
                        type="text" 
                        placeholder="Escribe tu nombre..."
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="mail">Email</label>
                    <input 
                        id="mail"
                        className="w-full h-8 border border-[#332B2B] rounded-lg p-2" 
                        type="email" 
                        placeholder="Escribe tu correo..."
                        name="mail"
                        value={formData.mail}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="text">Descripción</label>
                    <textarea 
                        id="text"
                        className="w-full h-28 border border-[#332B2B] rounded-lg p-2 resize-none" 
                        type="text" 
                        placeholder="Escribe un breve resumen del proyecto que quieres hacer..."
                        name="text"
                        alue={formData.text}
                        onChange={handleChange}
                        required
                    />

                    <ReCAPTCHA
                        ref={captchaRef}
                        sitekey={import.meta.env.VITE_RECAPTCHA_KEY}
                        onChange={handleChange}
                    />

                    {status && <p className={`text-center ${statusBackground} text-white rounded-xl`}>{status}</p>}
                    <button type="submit" className="w-full h-12 p-2 bg-[#7B0800] text-white rounded-xl duration-300 ease-in-out hover:bg-[#9B3A34] hover:scale-[103%]">Enviar</button>
                </div>
                <div ref={ref} className="w-full h-auto flex flex-col justify-center items-center gap-y-4 p-6">
                    <h2>Mi Redes de contacto</h2>
                    <p>Mi Correo Laboral:  
                        {visible && ` ${displaytext}`} 
                    </p>
                    <button
                        type="button"
                        onClick={copyText}
                        className="w-32 h-10 p-1 bg-[#7B0800] text-white rounded-xl duration-300 ease-in-out hover:bg-[#9B3A34] hover:scale-[103%]"
                    >
                        {copy ? "Copiado!": "Copiar Correo"}
                    </button>
                    <div className="w-full h-auto p-2 flex gap-4  justify-center items-center mb-5">
                        <a href="https://github.com/ElDragon-578" target="_blank" rel="noopener noreferrer">
                            <img src="./logosSkills/github-light.svg" alt="logoGit" className="w-6 h-6"/>
                        </a>
                        <a href="https://www.linkedin.com/in/jhon-deivid-ramirez-nuñez-a33b412b9/" target="_blank" rel="noopener noreferrer">
                            <img src="./logosSkills/linkedin.svg" className="w-6 h-6"/>
                        </a>
                    </div>
                </div>
            </form>


        </>
    )
}