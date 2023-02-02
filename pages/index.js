import { useFetchWithReTry } from '../hooks/useFetchWithRetry'

export default function Home() {
  const { data, error, isLoading } = useFetchWithReTry({
    url: '/api/hello',
    maxRetry: 3,
  })

  if (error) return <div style={{ color: 'red' }}>{error}</div>

  return (
    isLoading ? <div>Loading...</div> :
      (
        <main>
          <div>Country code: </div>
          <div>{data?.country_code}</div>
        </main>
      )
  )
}
