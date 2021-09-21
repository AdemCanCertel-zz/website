import Link from 'next/link';
import Tech from '../components/Tech';
import Repo from '../components/Repository/Repo';
import Edu from '../components/Education';
import Head from 'next/head';

export default function HomePage() {
    return  (
    <>
      <Head>
            <link rel="shortcut icon" href="https://media.discordapp.net/attachments/870311702347018250/884454889240006716/Bugs_Banny-AdemCan.jpg" />
            <title>Home - AdemCan C.</title>
            <meta name="description" content="A young student who knows JavaScript and loves programming." />
            <meta name="keywords" content="ademcan, frontend, ademcandev" />
            <meta name="theme-color" content="#41B883"/>
            <meta property="og:image"content="https://media.discordapp.net/attachments/870311702347018250/884454889240006716/Bugs_Banny-AdemCan.jpg" />
        </Head>

        <main>
        <div className="full-container flex">
            <div className="space-y-4">
            <h1 className="text-4xl font-semibold text-white"><Link href="/">Hi, I'm AdemCan Certel</Link></h1>
            <p className="mt-5 font-normal leading-relaxed">
                Hi, I'm Front End Developer and a high school student, 
                I have about 5 years of experience with JavaScript. 
                NextJS, NuxtJS, ReactJS are the technologies I use all the time. <Link href="/about">(Would you like to learn more about me)</Link>
            </p>
            </div>
        </div>
        
        <div className="full-container mt-10">
            <Tech/>
        </div>

        <div className="full-container mt-20">
            <Repo/>
        </div>

        <div className="full-container mt-10">
            <Edu/>
        </div>
        </main>

        <footer className="w-full bottom-0 text-white bg-gray-900 bg-opacity-50">
            <div className="py-3 px-3 mx-auto flex items-center sm:flex-row flex-col">
                <p className="text-sm font-semibold sm:ml-2 sm:pl-4 sm:mt-1 mt-4">
                    © 2021 AdemCan Certel - <a href="https://github.com/AdemCanCertel/website">This site is open-source on</a>
                </p>
            </div>
        </footer>
    </>
    )
} 
