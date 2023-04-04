import { useRouter } from "next/router";

function Review() {
    const router = useRouter();
    const { productID, reviewID } = router.query;
    console.log(productID, reviewID);

    return (
        <section>
            <h2>
                Review {reviewID} of Product {productID}
            </h2>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aspernatur, eum quod at
                consequatur doloribus facilis minima necessitatibus ad eligendi architecto neque
                tempore non enim earum a. Placeat, dolorum quidem?
            </p>
        </section>
    );
}

export default Review;
