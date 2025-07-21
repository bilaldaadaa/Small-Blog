import Link from 'next/link'


const NotFound = () => {
    return (
        <div className='flex w-screen flex-col h-screen items-center justify-center'>
            <p className='text-gray-600'>this it can't be found</p>
            <Link className='text-blue-700' href="/">Return Home</Link>
        </div>
    )
}

export default NotFound
