import Link from "next/link"
export default function ReadPost() {
    return (
        <div>
            <h1>Read Post </h1>
            <p>Dolore eos sadipscing labore lorem et tempor sadipscing, amet erat voluptua diam at sea consetetur. Et dolor kasd dolores dolor,.</p>
            <hr/>
            <Link href={`/post/allpost`}>Back to All Post</Link>
        </div>
    )
};
