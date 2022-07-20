import { useRouter } from 'next/router'

export default function Username() {
  const router = useRouter()
  const { Username } = router.query

  console.log(router.query)

  return <div>{Username}</div>
}
