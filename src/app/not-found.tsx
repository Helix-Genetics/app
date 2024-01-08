import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold">Not Found</h2>
      <p className="mb-4">Could not find the requested resource</p>
      <Link href="/" >
        <p className="text-blue-600 hover:underline">Return Home</p>
      </Link>
    </div>
  )
}
export default NotFound