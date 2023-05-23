import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import { motion as m } from 'framer-motion'
import Experience from '../components/homepage/Experience'
import Opening from '../components/Opening'
import Prologue from '../components/homepage/prologue/Prologue'

export default function Home() {
    const [showPrologue, setShowPrologue] = useState(false)
    const [showExperience, setShowExperience] = useState(false)

    useEffect(() => {
        const prologueTimeout = setTimeout(() => {
            setShowPrologue(true)
        }, 8000)
    
        return () => clearTimeout(prologueTimeout)
    }, [])
    
    useEffect(() => {
        if (showPrologue) {
        const experienceTimeout = setTimeout(() => {
            setShowExperience(true)
        }, 5000)
    
        return () => clearTimeout(experienceTimeout)
        }
    }, [showPrologue])

    return (
        <m.div
            initial={{opacity: 0, transition: {duration: 1}}}
            animate={{opacity: 1, transition: {duration: 1}}}
            exit={{opacity: 0, transition: {duration: 1}}}
            transition={{duration: 1, ease: 'easeOut'}}
            >
            <Head>
                <title>Piotr Bania | Folio</title>
                <meta name="description" content="Piotr Bania | Folio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="./svg/logo.svg" />
            </Head>

            <main>
                <Opening />
                {showPrologue && <Prologue />}
                {showExperience && <Experience />}
                {/* <Experience /> */}
            </main>
        </m.div>
    )
}