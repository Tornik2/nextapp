import { useRouter } from "next/router"
import Link from "next/link"



export default function Portfolio() {
    const router = useRouter()
    const {id} = router.query
    return(
        <div>
            <h1>portfolio</h1>
            <Link href="/portfolio/list">
                list
            </Link>
            <Link href={`/${id}`}>
                Project
            </Link>

        </div>
    )
}