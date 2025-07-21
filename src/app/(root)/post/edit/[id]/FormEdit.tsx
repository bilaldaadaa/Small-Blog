"use client"

import { editPost } from "@/apiCalls/postsApiCalls"
import { FormAddEditProps } from "@/interfaces/interfacess"
import { useRouter } from "next/navigation"
import { FormEvent, useRef, } from "react"

const FormEdit = ({ submit, rows, response }: FormAddEditProps) => {

    
    const title = useRef<HTMLInputElement>(null)
    const description = useRef<HTMLTextAreaElement>(null)
    const navigate = useRouter()
    const send = async (event: FormEvent) => {
        event.preventDefault()
        const responsef = await editPost({ title: title.current?.value, description: description.current?.value }, response.id)
        if (responsef) {
            navigate.refresh()
            navigate.push("/post")
        }

    }
    return (
        <form onSubmit={send} className="p-4 bg-purple-200 rounded w-[800px]">
            <div className="flex flex-col">
                <input className="mb-4 border rounded p-2 text-xl bg-slate-100" placeholder="Enter Post Title" type="text" name="title" required defaultValue={response.title} ref={title} />
                <textarea className="mb-4 p-2 lg:text-xl rounded resize-none bg-slate-100" rows={rows} placeholder="Enter Post Description" name="desc" required ref={description} defaultValue={response.description}></textarea>
                <button type="submit" className="text-2xl cursor-pointer text-white bg-green-600 hover:bg-green-700 p-2 rounded-lg font-bold">{submit}</button>
            </div>
        </form>

    )
}

export default FormEdit

