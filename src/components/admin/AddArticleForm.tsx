'use client'
import { useState } from "react"
import { toast } from 'react-toastify';
import axios from "axios";
import { DOMAIN } from "@/utils/contstants";
import { useRouter } from "next/navigation";

const AddArticleForm = () => {
    const router = useRouter()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const formSubmitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        if (title === "") {
            return (toast.error("enter your title"))


        }
        if (description === "") {
            return (toast.error("enter your description"))
        }
        try {
            await axios.post(`${DOMAIN}/api/articles`, { title, description })
            setTitle("")
            setDescription("")
            toast.success("new article added")
            router.refresh()


        } catch (error: any) {
            toast.error(error.response.data.message)

        }

    }

    return (
        <form onSubmit={formSubmitHandler} className="flex flex-col " >
            <input
                className="mb-4 border rounded p-2 text-xl"
                type="text"
                placeholder="enter Article title"
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value)
                }}
            />
            <textarea
                className="mb-4 p-2 lg:text-xl rounded resize-none"
                rows={5}
                placeholder="enter article description"
                value={description}
                onChange={(e) => { setDescription(e.target.value) }}
            ></textarea>
            <button
                className="text-2xl text-white bg-blue-700 hover:bg-blue-900 p-2 rounded-lg font-bold"
                type="submit"
            >
                Add
            </button>
        </form>
    )
}

export default AddArticleForm