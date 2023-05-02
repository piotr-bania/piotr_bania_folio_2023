import React from 'react'
import Layout from '../components/Layout'

import '../styles/globals.scss'
import '../styles/header.scss'
import '../styles/homepage.scss'

function MyApp({ Component, pageProps }) {
    return (
            <Layout>
                <Component {...pageProps} />
            </Layout>
    )
}

export default MyApp