import { Header } from "./components/Header.jsx"
import { AboutMe } from "./components/AboutMe.jsx"
import { Skills } from "./components/Skills"
import { Portfolio } from "./components/Portfolio.jsx"
import { Footer } from "../components/Footer.jsx"
import { Contact } from "./components/contact.jsx"
import { Navbar } from "../components/Navbar.jsx"
import { AnimateComponent } from "../components/AnimationComponent.jsx"

const components = [
    {id:0 , content: <AboutMe/>},
    {id:1 , content: <Portfolio/>},
    {id:2 , content: <Skills/>},
    {id:3 , content: <Contact/>},
]

export function Index(){
    return(
        <>
            <Header/>
            <Navbar position={"fixed"}/>
            {
                components.map((item)=>{
                    return <AnimateComponent key={item.id} content={item.content}/>

                })
            }
            <Footer />
        </>
    )
}