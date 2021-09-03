import Link from 'next/link';
import Social from '../components/Social';
import Tech from '../components/Tech';

export default function HomePage() {
    return  (
        <main>
        <div className="full-container">
            <div className="space-y-4">
            <h1 className="text-4xl font-extrabold text-white"><Link href="/">Hi, I'm AdemCan Certel</Link></h1>
            <p className="mt-5 font-normal leading-relaxed">
                Hi, I'm Front End and a high school student, 
                I have about 5 years of experience with JavaScript. 
                NextJS, NuxtJS, ReactJS are the technologies I use all the time. <Link href="/about">(Would you like to learn more about me)</Link>
            </p>
            </div>
        </div>

        <div className="full-container mt-10">
            <Tech/>
        </div>
        </main>
    )
} 
