import { Header } from "./components/header"
import { AboutMe } from "./components/aboutMe"
import { Skills } from "./components/Skills"

export function Index(){
    return(
        <>
            <Header/>
            <AboutMe/>
            <Skills/>
        </>
    )
}