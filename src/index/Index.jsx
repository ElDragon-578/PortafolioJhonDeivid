import { Header } from "./components/Header.jsx"
import { AboutMe } from "./components/AboutMe.jsx"
import { Skills } from "./components/Skills"
import { Portfolio } from "./components/Portfolio.jsx"

export function Index(){
    return(
        <>
            <Header/>
            <AboutMe/>
            <Skills/>
            <Portfolio/>
        </>
    )
}