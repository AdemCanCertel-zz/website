import Link from 'next/link';

function HomePage() {
    return <main>
            <header>
            <div className="flex items-center">
                <Link href="/">
                    <h1 className="font-semibold pl-3 mr-1 text-2xl inline-block">AdemCan</h1>
                </Link>
            </div>
        </header>
            <section>
                <h1>
                    Hey, I'm AdemCan Certel👋
                </h1>
                <p className="prose">
                    Hi, I'm Front End and a high school student, 
                    I have about 5 years of experience with JavaScript. 
                    NextJS, NuxtJS, ReactJS are the technologies I use all the time. <Link className="text-indigo-500" href="">Would you like to learn more about me</Link>
                </p>
            </section>
        </main>
} 
export default HomePage