import Link from "next/link";

function Blog() {
    return (
        <section>
            <h2>Blogs</h2>

            <ul>
                <li>
                    <Link href="/blog/1">Blog 1</Link>
                </li>
                <li>
                    <Link href="/blog/2">Blog 2</Link>
                </li>
                <li>
                    <Link href="/blog/3">Blog 3</Link>
                </li>
            </ul>
        </section>
    );
}

export default Blog;
