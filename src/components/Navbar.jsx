import { useEffect, useRef, useState } from "react"
import { Link } from "react-scroll"

export function Navbar({position}) {
    const navRef = useRef()
    const [scrolled, setScrolled] = useState(false)

    useEffect(()=>{
        const handleScroll = ()=>{
            setScrolled(window.scrollY > 250)
        }

        window.addEventListener("scroll", handleScroll)

        return () =>{
            window.removeEventListener("scroll", handleScroll)
        }
    },[])

    useEffect(()=>{
        const listItem =document.querySelectorAll("#headerA li")
        const menubackDrop = document.querySelector("#menu-backdrop")

        const handleMouseEnter = (e)=>{
            const {left, bottom, width, height} = e.target.getBoundingClientRect()

            menubackDrop.style.setProperty("--left", `${left}px`) 
            menubackDrop.style.setProperty("--bottom", `${bottom + window.scrollY}px`) 
            menubackDrop.style.setProperty("--width", `${width}px`) 
            menubackDrop.style.setProperty("--height", `${height}px`) 
            menubackDrop.style.opacity = '1'
            menubackDrop.style.visibility = "visible"
        }

        const handleMouseLeave = ()=>{
            menubackDrop.style.opacity = '0'
            menubackDrop.style.visibility = "hidden"
        }

        const handleScrollMenu = ()=>{
            menubackDrop.style.opacity = '0'
            menubackDrop.style.visibility = "hidden"
        }

        listItem.forEach((item)=>{
            item.addEventListener("mouseenter", handleMouseEnter)
            item.addEventListener("mouseleave", handleMouseLeave)
        })

        window.addEventListener("scroll", handleScrollMenu)


        return () =>{
            listItem.forEach((item)=>{
                item.removeEventListener("mouseenter", handleMouseEnter)
                item.removeEventListener("mouseleave", handleMouseLeave)
            })

            window.removeEventListener("scroll", handleScrollMenu)
        }

    },[])


    return(
        <>
            <nav ref={navRef} className={`w-full max-w-[100%] ${position} top-0 left-0 z-30 py-2 transition-all duration-300 ease-in-out  ${scrolled ? " shadow-xl backdrop-blur-lg [&>ul>li>a]:text-[#332B2B]": "bg-transparent text-white"}`}>
                <ul className="w-full flex justify-center text-sm [&>li>a]:inline-block [&>li>a]:p-4 [&>li>a]:py-2  lg:gap-8 z-20" id="headerA">
                    <li><Link to="header" smooth={true} duration={500} className="cursor-pointer">Inicio</Link></li>
                    <li><Link to="aboutme" smooth={true} duration={500} className="cursor-pointer">Acerca de Mi</Link></li>
                    <li><Link to="portfolio" smooth={true} duration={500} className="cursor-pointer">Portafolio</Link></li>
                    <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contacto</Link></li>
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