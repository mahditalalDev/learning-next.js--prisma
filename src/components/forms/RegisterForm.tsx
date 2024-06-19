'use client'
import { useState } from "react"
import { toast } from 'react-toastify';

const RegisterForm = () => {

    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const formSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        if (userName === "") {
            return (toast.error("enter your userName"))
        }
        else if (email === "") {
            return (toast.error("enter your Email"))
        } else if (password === "") {
            return (toast.error("enter your Password"))
        }
        else {
            console.log({ userName, email, password })
        }

    }

    return (
        <form onSubmit={formSubmitHandler} className="flex flex-col " >
            <input
                className="mb-4 border rounded p-2 text-xl"
                type="text"
                placeholder="enter your UserName"
                value={userName}
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
                className="text-2xl text-white bg-blue-800 p-2 rounded-lg font-bold"
                type="submit"
            >
                Register
            </button>
        </form>
    )
}

export default RegisterForm