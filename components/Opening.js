import React from 'react'
import { AnimatePresence, motion as m } from 'framer-motion'
import Image from 'next/image'

const Opening = () => {
    return (
        <AnimatePresence>
            <m.section
                id="opening"
                initial={{opacity: 0}}
                animate={{opacity: 1, transition: {duration: 2}}}
                exit={{opacity: 0, transition: {duration: 1}}}
                >
                <m.h2
                    className="text"
                    initial={{opacity: 0}}
                    animate={{ opacity: 1, transition: {delay: 1, duration: 2, ease: 'easeInOut'}}}
                    >Developed by
                </m.h2>

                <m.div
                    initial={{opacity: 0}}
                    animate={{ opacity: 1, transition: {delay: 2.5, duration: 2, ease: 'easeInOut'}}}
                    >
                    <Image className='logo' src="/svg/logo.svg" alt="logo" width={120} height={120} />
                </m.div>
                    
                <m.h1
                    className="subheader text"
                    initial={{opacity: 0}}
                    animate={{ opacity: 1, transition: {delay: 3, duration: 2, ease: 'easeInOut'}}}
                    >Piotr Bania
                </m.h1>

                <m.p
                    className="text"
                    initial={{opacity: 0}}
                    animate={{ opacity: 1, transition: {delay: 5.5, duration: 2, ease: 'easeInOut'}}}
                    >
                    Dare to dream in code.
                </m.p>

                <m.p
                    className="text"
                    initial={{opacity: 0}}
                    animate={{ opacity: 1, transition: {delay: 6, duration: 2, ease: 'easeInOut'}}}
                    >
                    Discover the untapped universe of web design.
                </m.p>
            </m.section>
        </AnimatePresence>
    )
}

export default Opening