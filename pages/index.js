import { useRouter } from 'next/router'
export default function Home() {
  const router = useRouter()
  const pathname = router.pathname
  const dynParam = router.query.id
  const query = router.query.paramName
  console.log('pathname' ,pathname)
  console.log('dunma',dynParam)
  console.log('dddd',query);
  return (
    <div>
      <h1>
        Home
      </h1>
      <a href="/about">aboutpage</a>
    </div>
  )
}