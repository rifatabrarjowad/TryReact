import Link from "next/link"
export default function ReadPost({ post }) {
    return (
        <div>
            <h1>{post.title} </h1>
            <p>{post.body}</p>
            <hr/>
            <Link href={`/post/allpost`}>Back to All Post</Link>
        </div>
    )
};
export async function getStaticProps() {
    /*
    If it will the server side render then it need as well
    const res =  fetch('https://jsonplaceholder.typicode.com/posts/1')
    [and also the function name be changed to getServerSideProps]
    
    */
    const post = {title: 'Post By', body: 'Dolore eos sadipscing labore lorem et tempor sadipscing, amet erat voluptua diam at sea consetetur. Et dolor kasd dolores dolor,'}
    return {
        props: {
           post
        },
    }
}