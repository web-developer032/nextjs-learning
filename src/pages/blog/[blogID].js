import { useRouter } from "next/router";

function Blog() {
    const router = useRouter();
    const { blogID } = router.query;
    console.log(blogID);
    return (
        <section>
            <h2>Blog of ID {blogID}</h2>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aspernatur, eum quod at
                consequatur doloribus facilis minima necessitatibus ad eligendi architecto neque
                tempore non enim earum a. Placeat, dolorum quidem?
            </p>
        </section>
    );
}

export default Blog;
