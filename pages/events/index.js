import { useRouter } from 'next/router'
import { Link } from 'next/link'


export default function EventsPage() {
  const router = useRouter()

  return (
    <div>
      <h1>
        all events
      </h1>
    </div>
  )
}