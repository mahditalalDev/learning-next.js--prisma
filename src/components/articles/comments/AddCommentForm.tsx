'use client'
import { useState } from "react"
import { toast } from "react-toastify"


const AddCommentForm = () => {
    const [text, setText] = useState("")

    const formSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        if (text === "") { return toast.error("please write Something") }
        console.log(text);
    }

    return (
        <form onSubmit={formSubmitHandler}  >
            <input
                className="rounded-lg text-xl p-2 w-full bg-white focus:shadow-md"
                type="text"
                placeholder="Add New Comment..."
                value={text}
                onChange={(e) => {
                    setText(e.target.value)
                }}
            />
            <button type="submit" className="bg-green-700 text-white mt-2 p-1 w-min text-xl rounded-lg hover:bg-green-900 transition">
                Comment
            </button>
        </form>
    )
}

export default AddCommentForm