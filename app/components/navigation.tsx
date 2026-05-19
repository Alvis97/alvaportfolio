"use client"

import { Menu, Moon, Sun } from 'lucide-react'
import React, { useEffect, useState } from 'react'

function Navigation() {
    const [lightmode, setLightmode] = useState(false)
    const [active, setActive] = useState("Home")
    const [mobileNav, setMobileNav] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
         function checkScreen() {
        setMobileNav(window.innerWidth >= 768)
    } 
    checkScreen()
     window.addEventListener("resize", checkScreen)
    return () => window.removeEventListener("resize", checkScreen)
    }, [])   

 useEffect(() => {
    if (lightmode) {
        document.documentElement.classList.add("light")
    } else {
        document.documentElement.classList.remove("light")
    }
}, [lightmode])

  return (
    <div className='flex w-full fixed z-1 justify-between backdrop-blur-md bg-white/0.5 p-3'>

    {!mobileNav && (
        <>
          <img className='h-8 w-8' src="/heart.svg" alt="" />
          <div>
            <button 
            onClick={() => setModalOpen(!modalOpen)}
            className={`transition-transform duration-300 ${modalOpen ? "rotate-90" : "-rotate-0"} cursor-pointer `}
            >
                <Menu/>
            </button>
            { modalOpen && (
            <div className='mobile-menu fixed flex flex-col justify-center items-end p-10 gap-5 top-13 left-0 h-screen w-screen'>
                  <a 
                    onClick={() => {setActive("Home"); setModalOpen(false)}}
                    href="#landingSection"
                    className='a-link'
                    >
                        Home
                    </a>
                    <a 
                    onClick={() => {setActive("About"); setModalOpen(false)}}
                    href="#about"
                    className='a-link'
                    >
                        About
                    </a>
                    <a 
                    onClick={() => {setActive("Projects"); setModalOpen(false)}}
                    href="#projects"
                    className='a-link'
                    >
                        Projects
                    </a>
                <button onClick={() => setLightmode(!lightmode)}>
                {lightmode ? ( <Sun/> ) : ( <Moon/> )}
        </button>
               
            </div>
            )}
        
          </div>
        </>
    )}



    {mobileNav && (
        <>
         <img className='h-8 w-8' src="/heart.svg" alt="" />

        <div className='flex gap-15'>
            <a 
            onClick={() => setActive("Home")}
            href="#landingSection"
             className={active === "Home" ? "underline underline-offset-8" : ""}>
                Home
            </a>
             <a 
            onClick={() => setActive("About")}
            href="#about"
             className={active === "About" ? "underline underline-offset-8" : ""}>
                About
            </a>
             <a 
            onClick={() => setActive("Projects")}
            href="#projects"
             className={active === "Projects" ? "underline underline-offset-8" : ""}>
                Projects
            </a>
        </div>

        <button onClick={() => setLightmode(!lightmode)}>
            {lightmode ? ( <Sun/> ) : ( <Moon/> )}
        </button>
        </>
    )}
       
    </div>
  )
}

export default Navigation
