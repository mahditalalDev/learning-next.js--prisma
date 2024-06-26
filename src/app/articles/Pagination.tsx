import Link from "next/link";

interface PaginationProps {
    pages: number;
    pageNumber: number;
    route: string;
}
const Pagination = ({ pages, pageNumber, route }: PaginationProps) => {
    let pagesArray: number[] = []
    for (let i = 1; i <= pages; i++) {
        pagesArray.push(i)
    }
    let pagesList: JSX.Element[] = pagesArray.map((page) => {
        let active = pageNumber === page ? 'bg-red-400' : "";
        return (
            <Link href={`${route}?pageNumber=${page}`} key={page}>
                <div className={`${active} border border-gray-700 text-gray-900 py-1 px-3 font-bold text-xl cursor-pointer hover:bg-gray-800 transition`}>
                    {page}
                </div>
            </Link>
        )
    })
    const prev = pageNumber - 1;
    const next = pageNumber + 1;
    return (
        <div className='flex items-center justify-center mt-4 mb-10'>
            {pageNumber !== 1 && (
                <Link href={`${route}?pageNumber=${prev}`}>
                    <h5 className='border border-gray-700 text-gray-900 py-1 px-3 font-bold text-xl cursor-pointerver:bg-gray-800 transition'>
                        prev
                    </h5>
                </Link>
            )}
            {pagesList}
            {pageNumber !== pages && (
                <Link href={`${route}?pageNumber=${next}`}>
                    <h5 className='border border-gray-700 text-gray-900 py-1 px-3 font-bold text-xl cursor-pointer hover:bg-gray-800 transition' >
                        next
                    </h5>
                </Link>)}
        </div>
    )
}

export default Pagination