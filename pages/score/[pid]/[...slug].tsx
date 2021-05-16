import {NextRouter, useRouter} from "next/router";

export default function GetScorePage() {
    const router: NextRouter = useRouter()
    const { pid } = router.query
    console.log(pid);
    return <p>Bah</p>;
}
