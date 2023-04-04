import { useRouter } from "next/router";

function Product() {
    const router = useRouter();
    const { productID } = router.query;
    console.log(productID);
    return (
        <section>
            <h2>Product of ID {productID}</h2>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aspernatur, eum quod at
                consequatur doloribus facilis minima necessitatibus ad eligendi architecto neque
                tempore non enim earum a. Placeat, dolorum quidem?
            </p>
        </section>
    );
}

export default Product;
