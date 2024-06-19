import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
    return (
        <section className='flex justify-center items-center flex-col' >
            <h1 className='text-7xl text-gray-800 font-bold' >404 error</h1>
            <p className='text-gray-500 text-3xl mt-2 mb-5' >not found page</p>
            <Link className='text-xl underline text-blue-700' href={"/"}>Go to Home Page</Link>
        </section>
    )
}

export default NotFoundPage