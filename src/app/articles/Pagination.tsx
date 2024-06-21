const pages = [1, 2, 3, 4, 5]
const Pagination = () => {
    let pagesList: JSX.Element[] = pages.map((page) => {
        return (<div key={page} className='border border-gray-700 text-gray-900 py-1 px-3 font-bold text-xl cursor-pointer
         hover:bg-gray-800 transition'>

            {page}

        </div>)

    })
    return (
        <div className='flex items-center justify-center mt-4 mb-10'>
            <h5 className='border border-gray-700 text-gray-900 py-1 px-3 font-bold text-xl cursor-pointer
         hover:bg-gray-800 transition'>prev</h5>
            {pagesList}
            <h5 className='border border-gray-700 text-gray-900 py-1 px-3 font-bold text-xl cursor-pointer
         hover:bg-gray-800 transition' >next</h5>

        </div>
    )
}

export default Pagination