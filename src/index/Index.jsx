import { Header } from "./components/Header.jsx"
import { AboutMe } from "./components/AboutMe.jsx"
import { Skills } from "./components/Skills"
import { Portfolio } from "./components/Portfolio.jsx"
import { Footer } from "../components/Footer.jsx"
import { Contact } from "./components/contact.jsx"
import { Navbar } from "../components/Navbar.jsx"

export function Index(){
    return(
        <>
            <Header/>
            <Navbar
                position={"fixed"}
            />
            <AboutMe/>
            <Portfolio/>
            <Skills/>
            <Contact/>

            <Footer />


        </>
    )
}