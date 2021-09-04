import '../assets/css/global.css'
import css from '../assets/css/main.css'
import Header from '../components/Header/Header'

export default function myApp({ Component, pageProps }) {
    return (
    <div>
        <Header/>
        <main>
    <Component {...pageProps} />
        </main>
    </div>
    )
}
