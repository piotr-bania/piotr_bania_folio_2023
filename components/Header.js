import React, { useState } from 'react'
import { AnimatePresence, motion as m } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {

    return (
        <section id='header'>
            <m.div
                initial={{opacity: 0}}
                animate={{ opacity: 1, transition: {delay: 1, duration: 2, ease: 'easeInOut'} }}
                >
                    
                <Link href="/">
                    <Image className='logo' src="/svg/logo.svg" alt="logo" width={60} height={60} />
                </Link>
            </m.div>
        </section>
    )
}

export default Header
