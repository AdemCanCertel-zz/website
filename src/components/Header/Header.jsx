import image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
    <>
        <header className="full-container py-10">
            <nav className="space-x-5 flex">
                <Link href="/">
                    <a className="hover:bg-gray-400 rounded py-1 px-2">Home</a>
                </Link>
                <Link href="https://ademcancerteldev.medium.com/">
                    <a className="hover:bg-gray-400 rounded py-1 px-2">Blog</a>
                </Link>
                <Link href="/about">
                    <a className="hover:bg-gray-400 rounded py-1 px-2">About</a>
                </Link>
            </nav>
            <hr className="mt-4 opacity-20" />
        </header>
    </>
    )
}