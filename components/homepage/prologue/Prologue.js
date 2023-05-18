import React from 'react'
import { AnimatePresence, motion as m } from 'framer-motion'

const Prologue = () => {
    return (
        <AnimatePresence>
            <m.section
                id="opening"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1 } }}
                exit={{ opacity: 0, transition: { duration: 1 } }}
                >
                <m.h1
                    className="header text"
                    initial={{opacity: 0}}
                    animate={{ opacity: 1, transition: {delay: 1, duration: 2, ease: 'easeInOut'}}}
                    >Unveiling the Enigma
                </m.h1>

                <m.p
                    className="text"
                    initial={{opacity: 0}}
                    animate={{ opacity: 1, transition: {delay: 2, duration: 2, ease: 'easeInOut'} }}
                    >
                    (Homepage)
                </m.p>
            </m.section>
        </AnimatePresence>
    )
}

export default Prologue