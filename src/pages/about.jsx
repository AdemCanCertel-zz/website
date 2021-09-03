import 'react-tippy/dist/tippy.css';
import { Tooltip, withTooltip } from 'react-tippy';

export default function AboutPage() {
    return (
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

        <div className="full-container mt-16">
            <dv className="mt-4">
                <h2 className="text-4xl font-semibold">Tools</h2>
                <p className="mt-2">
                The code editor I always use <a className="vsc" href="https://code.visualstudio.com/">Visual Studio Code</a>
                <div className="mt-2 space-y-2 underline">
                    <li type="square"><a className="extensions" href="https://marketplace.visualstudio.com/items?itemName=akamud.vscode-theme-onedark"><Tooltip title="Click Me!" animation="scale">Atom One Dark Theme</Tooltip></a></li>
                    <li type="square"><a className="extensions" href="https://marketplace.visualstudio.com/items?itemName=sdras.night-owl"><Tooltip title="Click Me!" animation="scale">Night Owl</Tooltip></a></li>
                    <li type="square"><a className="extensions" href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"><Tooltip title="Click Me!" animation="scale">TailwindCSS IntelliSense</Tooltip></a></li>
                    <li type="square"><a className="extensions" href="https://marketplace.visualstudio.com/items?itemName=cirlorm.mobileview"><Tooltip title="Click Me!" animation="scale">MobileView</Tooltip></a></li>
                </div>
                </p>
            </dv>
        </div>
    </main>
    )
}