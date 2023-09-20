import {useRouter} from 'next/router'

export default function PortfolioProjectPage() {
    const router = useRouter()
    console.log(router.query)
    return(
        <>
            <h1>{`PortProjPage with the NAME of ${useRouter().query.id}`}</h1>
        </>
    )
}