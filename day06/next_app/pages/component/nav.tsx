import Link from 'next/link'
export default function Nav() {
    return (
        <div>
            <h1>From Navbar</h1>
            <Link href={`/`}>Home</Link>
            <br />
            <Link href={`/post/allpost`}>All Post</Link>
            <br />
        </div>
    )
}