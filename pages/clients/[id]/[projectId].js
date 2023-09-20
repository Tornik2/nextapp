import { useRouter } from "next/router"

export default function SelectedClientProj() {
    console.log(useRouter().query)
    
    return(
        <>
            <h1>Single proj from given ClientProjPage</h1>
        </>
    )
}