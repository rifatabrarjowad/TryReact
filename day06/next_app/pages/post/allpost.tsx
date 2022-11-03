import Link from 'next/link'
export default function Post() {
    return (
        <div>
            <h1>All Post</h1>
            <Link href={`/post/readpost`}>Post 1</Link>
            <br />
        </div>
    )
};
