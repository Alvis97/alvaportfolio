"use client"

import React, { useState } from 'react'
import { MoveRight, Mail, Check } from "lucide-react"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

function LandingSection() {
    const [copied, setCopied] = useState(false)

    function copyEmail() {
        navigator.clipboard.writeText("alva-jonsson@live.se")
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }
  return (
<div className='h-screen w-screen flex items-center justify-center relative'>
<div className='flex flex-col gap-0 items-center justify-center w-full md:relative md:m-auto md:w-[80vw] md:max-w-[1300px] md:h-[100%]'>
        <div className='relative flex w-[65%] h-[120px] mx-auto md:absolute md:my-auto md:left-[5%] md:my-auto md:w-[95%] md:h-[65%] lg:h-[85%] '>
           <img className='absolute heart-bounce rotate-[-10deg] h-[100%] w-[28%] lg:left-[0%] md:w-[25%] md:h-[45%]' style={{animationDelay: '0s'}} src="/heart.svg" alt="heart"/>
           <img className='absolute heart-bounce rotate-[-130deg] h-[100%] w-[28%] left-[23%] bottom-3 md:left-[27%] md:top-0 md:w-[25%] md:h-[45%]' style={{animationDelay: '0.3s'}} src="/heart.svg" alt="heart"/>
           <img className='absolute heart-bounce rotate-[170deg] h-[100%] w-[28%] right-[23%] bottom-3 md:left-[56%] md:top-27 md:w-[25%] md:h-[45%]' style={{animationDelay: '0.6s'}} src="/heart.svg" alt="heart"/>
           <img className='absolute heart-bounce rotate-[10deg] h-[100%] w-[28%] right-0 md:bottom-10 md:left-[75%] md:w-[25%] md:h-[45%]' style={{animationDelay: '0.9s'}} src="/heart.svg" alt="heart"/>
        </div>

        <div className='text-center w-[90%] mx-auto md:text-left md:absolute md:bottom-15 md:left-0 md:w-100 lg:w-130'>
            <p className='font-[var(--font-onest)] text-[var(--accent)] text-sm md:text-sm lg:text-sm'>
                ALVA JONSSON
                </p>
            <h1 className='font-[family-name:var(--font-onest)] text-2xl mb-3   md:text-3xl md:mb-2'
            >Frontend blockchain developer
            </h1>
            <p>Curious at heart. I design, develop and dive deep into creative 
                technologies - from web2 layouts to web3 experiments. 
            </p>
            <span className='flex gap-6 w-fit m-auto my-5 [&>a]:hover:scale-110 [&>a]:transition-transform [&>a]cursor-pointer md:m-0 md:my-7'>
                <a className='flex' href="">Learn more <MoveRight/></a>
                <a className='flex text-[var(--accent)]' href="">View projects <MoveRight/></a>
            </span>
            <span className='flex w-fit gap-3 m-auto [&>a]:hover:scale-110 [&>a]:transition-transform [&>a]cursor-pointer md:m-0 md:pt-2 md:gap-5'>
                <a href="https://www.linkedin.com/in/alva-jonsson/"><FaLinkedin size={25}/></a>
                <a href="https://github.com/Alvis97"><FaGithub size={25}/></a>
                <a href="https://x.com/alvajon1997"><FaXTwitter size={25}/></a>
                <div className='relative group'>
                    <button onClick={copyEmail} className='cursor-pointer hover:scale-110 transition-transform'>
                        {copied ? <Check size={25}/> : <Mail size={25}/>}
                    </button> 
                    <span className='absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs rounded bg-white/50 text-black whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity'>
                        Click to copy email 
                    </span>  
                </div>
           
            </span>
        </div>
</div>
    </div>
  )
}

export default LandingSection