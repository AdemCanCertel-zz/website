import '../assets/css/global.css'
import css from '../assets/css/main.css'
import Header from '../components/Header/Header'

export default function myApp({ Component, pageProps }) {
    return (
    <div>
        <Header/>
        <min>
    <Component {...pageProps} />
        </min>
    </div>
    )
}
