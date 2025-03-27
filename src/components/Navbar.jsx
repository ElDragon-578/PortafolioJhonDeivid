import { useScroll } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export function Navbar({position}) {
    const navRef = useRef()
    const [scrolled, setScrolled] = useState(false)

    useEffect(()=>{
        const handleScroll = ()=>{
            setScrolled(window.scrollY >200)
        }

        window.addEventListener("scroll", handleScroll)

        return () =>{
            window.removeEventListener("scroll", handleScroll)
        }
    },[])

    useEffect(()=>{
        const listItem =document.querySelectorAll("#headerA li")
        const menubackDrop = document.querySelector("#menu-backdrop")

        listItem.forEach((item)=>{
            item.addEventListener("mouseenter", ()=>{
                const {left, bottom, width, height} = item.getBoundingClientRect()

                menubackDrop.style.setProperty("--left", `${left}px`) 
                menubackDrop.style.setProperty("--bottom", `${bottom + window.scrollY}px`) 
                menubackDrop.style.setProperty("--width", `${width}px`) 
                menubackDrop.style.setProperty("--height", `${height}px`) 
                menubackDrop.style.opacity = '1'
                menubackDrop.style.visibility = "visible"
            })

            window.addEventListener("scroll", ()=>{
                menubackDrop.style.opacity = '0'
                menubackDrop.style.visibility = "hidden"
            })

            item.addEventListener("mouseleave", ()=>{
                menubackDrop.style.opacity = '0'
                menubackDrop.style.visibility = "hidden"
            })

            return () =>{
                wwindow.addEventListener("scroll", ()=>{
                    menubackDrop.style.opacity = '0'
                    menubackDrop.style.visibility = "hidden"
                })
            }
        })

    },[])


    return(
        <>
            <nav ref={navRef} className={`w-full ${position} top-0 left-0 z-30 py-2 transition-all duration-300 ease-in-out  ${scrolled ? " shadow-xl backdrop-blur-lg [&>ul>li>a]:text-[#332B2B]": "bg-transparent text-white"}`}>
                <ul className="w-full flex justify-center text-sm [&>li>a]:inline-block [&>li>a]:p-4 [&>li>a]:py-2  gap-8 z-20" id="headerA">
                    <li><a href="#header">Inicio</a></li>
                    <li><a href="#aboutme">Acerca de Mi</a></li>
                    <li><a href="#portfolio">Portafolio</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </nav>

            <div id="menu-backdrop"
                className="absolute h-[0.2rem] bg-[#332B2B] backdrop-blur-lg rounded transition-all duration-300 ease-in-out opacity-0 z-30 delay-75"
                style={{
                    left: "var(--left)",
                    top: "var(--bottom)",
                    width: "var(--width)",
                }}  
            >

            </div>
        </>
    )
}