'use client'
import { useState } from "react"
import { toast } from 'react-toastify';
import axios from "axios";
import { DOMAIN } from "@/utils/contstants";
import { useRouter } from "next/navigation";

const RegisterForm = () => {

    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false);
    const router = useRouter()

    const formSubmitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        if (username === "") {
            return (toast.error("enter your userName"))
        }
        if (email === "") {
            return (toast.error("enter your Email"))
        } if (password === "") {
            return (toast.error("enter your Password"))
        }
        try {
            setLoading(true);
            await axios.post(`${DOMAIN}/api/users/register`, { email, password, username });
            router.replace("/")
            setLoading(false)
            router.refresh();
        } catch (error: any) {
            setLoading(false)
            toast.error(error?.response.data.message)
            console.log("hello", error)

        }

    }

    return (
        <form onSubmit={formSubmitHandler} className="flex flex-col " >
            <input
                className="mb-4 border rounded p-2 text-xl"
                type="text"
                placeholder="enter your UserName"
                value={username}
                onChange={(e) => {
                    setUserName(e.target.value)
                }}
            />
            <input
                className="mb-4 border rounded p-2 text-xl"
                type="email"
                placeholder="enter your email"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
            />
            <input
                className="mb-4 border rounded p-2 text-xl"
                type="password"
                placeholder="enter your password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
            />
            <button
                disabled={loading}
                className="text-2xl text-white bg-blue-800 p-2 rounded-lg font-bold"
                type="submit"
            >
                {loading ? 'loading...' : 'Register'}

            </button>
        </form>
    )
}

export default RegisterForm