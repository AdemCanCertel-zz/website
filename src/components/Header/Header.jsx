import Link from 'next/link'

export default function Header() {
    return (
        <header className="full-container py-10">
            <nav className="space-x-5">
                <Link href="/">
                    <a className="hover:bg-gray-400 p-4 px-4 py-4 rounded-lg">Home</a>
                </Link>
                <Link href="/blog">
                    <a className="hover:bg-gray-400b p-4 px-4 py-4 rounded-lg">Blog</a>
                </Link>
                <Link href="/about">
                    <a className="hover:bg-gray-400 p-4  px-4 py-4 rounded-lg">About</a>
                </Link>
            </nav>
            <hr className="mt-4 opacity-30" />
        </header>
    )
}