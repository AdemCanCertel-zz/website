import '../assets/css/global.css'
import css from '../assets/css/main.css'
import Header from '../components/Header/Header'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
