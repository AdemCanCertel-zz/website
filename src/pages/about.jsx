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
                    <li><a href="https://marketplace.visualstudio.com/items?itemName=akamud.vscode-theme-onedark">Atom One Dark Theme</a></li>
                    <li><a href="https://marketplace.visualstudio.com/items?itemName=sdras.night-owl">Night Owl</a></li>
                    <li><a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss">TailwindCSS IntelliSense</a></li>
                    <li><a href="https://marketplace.visualstudio.com/items?itemName=cirlorm.mobileview">MobileView</a></li>
                </div>
                </p>
            </dv>
        </div>
    </main>
    )
}