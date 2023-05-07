import { useRouter } from "next/router";

export default function Doc() {
    // CATCH ALL ROUTES (EXCEPTION ROUTES)
    const router = useRouter();
    const { params = [] } = router.query;
    console.log(params);

    return <h1>Doc Home page</h1>;
}
