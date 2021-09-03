import Link from 'next/link';

export default function HomePage() {
    return  (
        <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
            <h1 className="text-4xl font-semibold"><Link href="/">AdemCan Certel</Link></h1>
            <p className="mt-5">
                Hi, I'm Front End and a high school student, 
                I have about 5 years of experience with JavaScript. 
                NextJS, NuxtJS, ReactJS are the technologies I use all the time. <Link className="text-indigo-500" href="">Would you like to learn more about me</Link>
            </p>
            </div>
        </div>
    )
} 
