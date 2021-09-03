import Link from 'next/link';

export default function HomePage() {
    return  (
        <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
            <h1 className="text-4xl font-extrabold text-gray-400"><Link href="/">Hi, I'm AdemCan Certel</Link></h1>
            <p className="mt-5 font-medium">
                Hi, I'm Front End and a high school student, 
                I have about 5 years of experience with JavaScript. 
                NextJS, NuxtJS, ReactJS are the technologies I use all the time. <Link href="/">(Would you like to learn more about me)</Link>
            </p>
            </div>
        </div>
    )
} 
