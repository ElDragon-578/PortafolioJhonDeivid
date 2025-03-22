import { Header } from "./components/Header.jsx"
import { AboutMe } from "./components/AboutMe.jsx"
import { Skills } from "./components/Skills"
import { Portfolio } from "./components/Portfolio.jsx"
import { Footer } from "../components/Footer.jsx"
import { Particules } from "../components/Particules.jsx"

export function Index(){
    return(
        <>
            <Header/>
            <AboutMe/>
            <Portfolio/>
            <Skills/>

            <Footer />


        </>
    )
}