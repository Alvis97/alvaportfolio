"use client"

import { Moon, Sun } from 'lucide-react'
import React, { useEffect, useState } from 'react'

function Navigation() {
    const [lightmode, setLightmode] = useState(false)
    const [active, setActive] = useState("Home")

 useEffect(() => {
    if (lightmode) {
        document.documentElement.classList.add("light")
    } else {
        document.documentElement.classList.remove("light")
    }
}, [lightmode])

  return (
    <div className='flex w-full fixed z-1 justify-between backdrop-blur-md bg-white/0.5 p-3'>
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
    </div>
  )
}

export default Navigation
