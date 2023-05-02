import React from 'react'
import Head from 'next/head'
import { motion as m } from 'framer-motion'
import Experience from '../components/homepage/Experience'

export default function About() {

    return (
        <m.div
            initial={{opacity: 0, transition: {duration: 1}}}
            animate={{opacity: 1, transition: {delay: 1, duration: 1}}}
            exit={{opacity: 0, transition: {duration: 1}}}
            transition={{duration: 1, ease: 'easeOut', delay: 0}}
            >
            <Head>
                <title>Piotr Bania | Folio</title>
                <meta name="description" content="Piotr Bania | Folio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="./svg/logo.svg" />
            </Head>

            <main>
                <Experience />
            </main>
        </m.div>
    )
}