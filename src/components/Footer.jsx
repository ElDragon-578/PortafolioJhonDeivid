export function Footer() {

    return(
        <>
            <footer className="w-full h-full min-h-[250px] bg-[#332B2B] flex flex-col place-items-center justify-center ">
                <h1 className="w-full h-auto text-white text-center bg-[#332B2B] p-2 text-[25px] mb-5">Que esperas para hacer tu proyecto realidad!</h1>
                <div className="w-full h-auto p-2 flex gap-3 place-items-center justify-center mb-5">
                    <a href="https://github.com/ElDragon-578" target="_blank">
                        <img src="../../public/logosSkills/github-dark.svg" alt="logoGit" className="w-[25px] h-[25px]"/>
                    </a>
                    <a href="https://www.linkedin.com/in/jhon-deivid-ramirez-nuñez-a33b412b9/" target="_blank">
                        <img src="../../public/logosSkills/brand-linkedin.svg" className="w-[25px] h-[25px]"/>
                    </a>
                </div>
                <div className="w-full h-auto p-2 flex  place-items-center justify-evenly text-white  mb-5">
                    <a href="#">Inicio</a>
                    <a href="#">Acerca de mi</a>
                    <a href="#">Portafolio</a>
                    <a href="#">Skills</a>
                </div>
                <div className="w-full h-auto p-2 flex flex-col text-white text-center mb-5">
                    <p>&copy; Todos los derechos reservados Jhon Deivid Nuñez</p>
                </div>
            </footer>
        </>
    )
}