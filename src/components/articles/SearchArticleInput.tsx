'use client'
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify"



const SearchArticleInput = () => {
    const [searchText, setSearchText] = useState("")
    const router = useRouter();
    const formSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchText === '') { return toast.error("please enter something") }
        router.push(`/articles/search?title=${searchText}`)
        // api/articles/search?title=value
    }

    return (
        <form onSubmit={formSubmitHandler} className="my-5 w-full md:w-2/3 m-auto" >
            <input
                className="w-full p-3 rounded text-xl border-none text-gray-900"
                type="search"
                placeholder="search for artcile"
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value)
                }}
            />
        </form>
    )
}

export default SearchArticleInput