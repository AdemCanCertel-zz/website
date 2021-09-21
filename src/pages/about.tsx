import 'react-tippy/dist/tippy.css';
import { Tooltip, withTooltip } from 'react-tippy';
import image from 'next/image';
import Head from 'next/head'

export default function AboutPage() {
    return (
    <>
     <Head>
            <link rel="shortcut icon" href="https://media.discordapp.net/attachments/870311702347018250/884454889240006716/Bugs_Banny-AdemCan.jpg" />
            <title>About - AdemCan C.</title>
            <meta name="description" content="Would you like to know more about me?" />
            <meta name="keywords" content="ademcan, frontend, ademcandev, about, information" />
            <meta name="theme-color" content="#41B883"/>
            <meta property="og:image"content="https://media.discordapp.net/attachments/870311702347018250/884454889240006716/Bugs_Banny-AdemCan.jpg" />
        </Head>
    <main>
        <div className="full-container">
            <div className="mt-4">
                <h2 className="text-4xl font-semibold">About</h2>
                <p className="mt-2">
                Hi, I am AdemCan Certel 17 years old high school student in Turkey from 2017 I am doing the site with web technologies. 
                I'm mostly focused on JavaScript, doing web projects through JavaScript. I'm learning TypeScript now.
                </p>
            </div>
        </div>

        <div className="full-container flex mt-3 space-x-2">
        <Tooltip title="Follow me on GitHub!" animation="shift" theme="light"><a href="https://github.com/AdemCanCertel/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-8 h-8 text-white"><path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" fill="currentColor"></path></svg>
        </a></Tooltip>

        <Tooltip title="Join my Discord server!" animation="shift" theme="light"><a href="https://discord.gg/dwgkB4hua2" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" className="w-8 h-8 text-white"><path d="M464 66.52A50 50 0 00414.12 17L97.64 16A49.65 49.65 0 0048 65.52V392c0 27.3 22.28 48 49.64 48H368l-13-44 109 100zM324.65 329.81s-8.72-10.39-16-19.32C340.39 301.55 352.5 282 352.5 282a139 139 0 01-27.85 14.25 173.31 173.31 0 01-35.11 10.39 170.05 170.05 0 01-62.72-.24 184.45 184.45 0 01-35.59-10.4 141.46 141.46 0 01-17.68-8.21c-.73-.48-1.45-.72-2.18-1.21-.49-.24-.73-.48-1-.48-4.36-2.42-6.78-4.11-6.78-4.11s11.62 19.09 42.38 28.26c-7.27 9.18-16.23 19.81-16.23 19.81-53.51-1.69-73.85-36.47-73.85-36.47 0-77.06 34.87-139.62 34.87-139.62 34.87-25.85 67.8-25.12 67.8-25.12l2.42 2.9c-43.59 12.32-63.44 31.4-63.44 31.4s5.32-2.9 14.28-6.77c25.91-11.35 46.5-14.25 55-15.21a24 24 0 014.12-.49 205.62 205.62 0 0148.91-.48 201.62 201.62 0 0172.89 22.95s-19.13-18.15-60.3-30.45l3.39-3.86s33.17-.73 67.81 25.16c0 0 34.87 62.56 34.87 139.62 0-.28-20.35 34.5-73.86 36.19z"></path> <path d="M212.05 218c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.8 0 24.7-11.83 24.7-26.57.25-14.76-10.9-26.57-24.7-26.57zm88.38 0c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.81 0 24.7-11.83 24.7-26.57S314 218 300.43 218z"></path></svg>
        </a></Tooltip>

        <Tooltip title="Follow me on Instagram!" animation="shift" theme="light"><a href="https://instagram.com/ademcancertel_/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-8 h-8 text-white"><path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" fill="currentColor"></path> <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" fill="currentColor"></path></svg>
        </a></Tooltip>

        <Tooltip title="Send me an e-mail!" animation="shift" theme="light"><a href="mailto:ademcancertel619@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg>
        </a></Tooltip>
        </div>

        <div className="full-container mt-16">
            <div className="mt-4">
                <h2 className="text-4xl font-semibold">Tools</h2>
                    <hr className="opacity-50 w-1/6" />
                    <p className="font-light text-sm mt-2">A list of my favorite tools that I use regularly and recommend you try.</p>
                <p className="mt-2">
                The code editor I always use <a className="vsc" href="https://code.visualstudio.com/">Visual Studio Code</a>
                <div className="mt-2 space-y-2 underline">
                        <div className="flex flex-row p-4 bg-gray-900 rounded-lg border border-gray-800 w-full text-left space-x-2">
                            <li className="square list-none"><a href="https://marketplace.visualstudio.com/items?itemName=akamud.vscode-theme-onedark" className="extensions"><Tooltip title="Click Me!" animation="scale">Atom Dark Theme</Tooltip></a></li>
                        </div>
                        <div className="flex flex-row p-4 bg-gray-900 rounded-lg border border-gray-800 w-full text-left space-x-2">
                            <li className="list-none"><a className="extensions" href="https://marketplace.visualstudio.com/items?itemName=sdras.night-owl"><Tooltip title="Click Me!" animation="scale">Night Owl</Tooltip></a></li>
                        </div>
                        <div className="flex flex-row p-4 bg-gray-900 rounded-lg border border-gray-800 w-full text-left space-x-2">
                            <li className="list-none"><a className="extensions" href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"><Tooltip title="Click Me!" animation="scale">TailwindCSS IntelliSense</Tooltip></a></li>
                        </div>
                        <div className="flex flex-row p-4 bg-gray-900 rounded-lg border border-gray-800 w-full text-left space-x-2">
                            <li  className="list-none"><a className="extensions" href="https://marketplace.visualstudio.com/items?itemName=cirlorm.mobileview"><Tooltip title="Click Me!" animation="scale">MobileView</Tooltip></a></li>
                        </div>    
                </div>
                <p className="mt-4 font-semibold">Some applications I use on the computer</p>
                <div className="mt-2 space-y-2 underline">
                    <div className="flex flex-row p-4 bg-gray-900 rounded-lg border border-gray-800 w-full text-left space-x-2">
                        <img src="https://i.pinimg.com/originals/17/06/c9/1706c9f16bd08eb5e03f1df3e0a94a1c.png" className="w-12 h-12"/>
                        <li className="square list-none"><a href="" className="extensions"><Tooltip title="Click Me!" animation="scale">Figma</Tooltip></a></li>
                    </div>
                    <div className="flex flex-row p-4 bg-gray-900 rounded-lg border border-gray-800 w-full text-left space-x-2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png" className="w-12 h-12"/>
                        <li className="square list-none"><a href="" className="extensions"><Tooltip title="Click Me!" animation="scale">GitHub Desktop</Tooltip></a></li>
                    </div>
                    <div className="flex flex-row p-4 bg-gray-900 rounded-lg border border-gray-800 w-full text-left space-x-2">
                        <img src="https://cdn-images-1.medium.com/max/184/1*eT1vA87AVmUeujURPbFObg@2x.png" className="w-12 h-12" />
                        <li className="square list-none"><a href="" className="extensions"><Tooltip title="Click Me!" animation="scale">ProtoPie</Tooltip></a></li>
                    </div>
                    <div className="flex flex-row p-4 bg-gray-900 rounded-lg border border-gray-800 w-full text-left space-x-2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/2048px-Google_Chrome_icon_%28September_2014%29.svg.png" className="w-12 h-12"/>
                        <li className="square list-none"><a href="" className="extensions"><Tooltip title="Click Me!" animation="scale">Google Chrome</Tooltip></a></li>
                    </div>
                </div>
                </p>
            </div>
        </div>
    </main>
    </>
    )
}