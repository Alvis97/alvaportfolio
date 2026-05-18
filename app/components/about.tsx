"use client"

import React, { useEffect, useState } from 'react'

function About() {
    const [readmore, setReadmore] = useState(false)
    const [largeScreen, setLargeScreen] = useState(false)

    useEffect(() => {
    function checkScreen() {
        setLargeScreen(window.innerWidth >= 768)
    }
    checkScreen()
    window.addEventListener("resize", checkScreen)
    return () => window.removeEventListener("resize", checkScreen)
}, [])


  return (
    <div className='min-h-screen w-screen flex flex-col justify-evenly items-center lg:flex-row'>

        <img className='h-40 rounded-sm md:h-60 lg:h-80' src="/alva.png" alt="portrait" />

        <div className='w-[90%] md:w-140 md lg:w-180 lg:text-left'>
            <p className='font-[var(--font-onest)] text-[var(--accent)] text-sm md:text-sm lg:text-sm'>
                ABOUT
            </p>
            <h1 className='font-[family-name:var(--font-onest)] text-2xl max-w-150  mb-3 md:text-3xl md:mb-2'>
                Drawn to the space where design meets code.
            </h1>
            <p className='pb-3'>
                I'm a frontend developer with a strong eye for design, drawn to the space where visuals and code move 
                together. I enjoy building interfaces that feel intuitive, calm and a little unexpected, where every detail is intentional.
            </p>  

            {largeScreen ? (

            <p>
            My focus right now is Solana. I'm fascinated by the challenge of making blockchain interactions feel natural and human. Connecting wallets, swapping tokens, minting NFTs, all wrapped in clean, thoughtful UI.
            I work with React, TypeScript and Next.js, and I'm especially interested in how great design and decentralized technology can blend together. For me, Web3 is as much a creative space as a technical one.
            </p>

            ) : (
                
            <>
            <button 
            className='text-[var(--accent)]'
            onClick={() => setReadmore(!readmore)}>{ !readmore ? "Read less" : "Read more"}</button>
            { !readmore && (
                  <p>
            My focus right now is Solana. I'm fascinated by the challenge of making blockchain interactions feel natural and human. Connecting wallets, swapping tokens, minting NFTs, all wrapped in clean, thoughtful UI.
            I work with React, TypeScript and Next.js, and I'm especially interested in how great design and decentralized technology can blend together. For me, Web3 is as much a creative space as a technical one.
            </p>
            )}
            </>
            )}
          

        
        

        </div>

    </div>
  )
}

export default About

