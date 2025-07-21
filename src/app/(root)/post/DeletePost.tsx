"use client"


import { deletepostapi } from "@/apiCalls/postsApiCalls"
import { useRouter } from "next/navigation"

const DeletePost = ({ id }: { id: string }) => {
    const navigate = useRouter()
    return (
        <button className="w-full text-center  cursor-pointer bg-[#DC2626] h-[32px] text-white rounded-lg" onClick={() => { deletepostapi(id), navigate.refresh() }}>Delete</button>
    )
}

export default DeletePost
