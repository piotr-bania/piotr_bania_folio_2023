import '../styles/globals.scss'
import '../styles/header.scss'
import '../styles/homepage_experience.scss'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp