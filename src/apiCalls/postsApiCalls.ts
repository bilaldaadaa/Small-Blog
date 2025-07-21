import { Domain } from "@/utils/constant"

export async function getData() {
    const respones = await fetch(`${Domain}/api/posts `, {
        method: "GET",
        cache: "no-store"
    })
    if (!respones.ok) {
        throw new Error("somethings went wrong")
    } else {
        return respones.json()
    }
}

export async function getInfoPost(id: String) {
    console.log(id)
    try {
        const respones = await fetch(`${Domain}/api/posts/${id}`, {
            cache: "no-store",
            method: "GET"
        })
        return respones.json()
    }
    catch (error: any) {
        throw new Error(error)
    }
}

export async function addPost(post: { title?: string, description?: string }) {
    try {
        const respones = await fetch(`${Domain}/api/posts`, {
            method: "POST",
            body: JSON.stringify(post)
        })
        return respones.json()
    }
    catch (error: any) {
        throw new Error(error)
    }
}
export async function editPost(post: { title?: string, description?: string }, id: string) {
    try {
        const respones = await fetch(`${Domain}/api/posts/${id}`, {
            method: "PUT",
            body: JSON.stringify(post)
        })
        return respones.json()
    }
    catch (error: any) {
        throw new Error(error)
    }
}


export async function deletepostapi(id: string) {
    try {
        const respones = await fetch(`${Domain}/api/posts/${id}`, {
            method: "DELETE"
        })
        return respones.json()
    }
    catch (error: any) {
        throw new Error(error)
    }
}