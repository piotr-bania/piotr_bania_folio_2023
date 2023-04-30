import { Suspense } from 'react'
import Layout from '../components/Layout'

import '../styles/globals.scss'
import '../styles/header.scss'
import '../styles/homepage_experience.scss'

function MyApp({ Component, pageProps }) {
    return (
        <Suspense>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Suspense>
    )
}

export default MyApp