import { Suspense } from "react"
import Loading from "./loading"
import { getData } from "@/apiCalls/postsApiCalls"
import Link from "next/link"
import DeletePost from "./DeletePost"
import { posts } from "@/interfaces/interfacess"
const post = async () => {
    const posts: posts[] = await getData()
    console.log(posts)
    return (
        <Suspense fallback={<Loading />}>
            <div className="">
                <div className="flex items-center justify-between px-[20px] flex-wrap gap-10 mt-10 border-0 ">
                    {
                        posts.map((post) => {
                            return (
                                <div key={post.id} className="flex flex-col w-[250px] bg-slate-200 font-bold gap-4 p-4 rounded">
                                    <h4 className="font-semibold"><Link href={`/post/${post.id}`}>{post.title}</Link></h4>
                                    <p className="text-[#b91c1c]">{post.description}</p>
                                    <div className="flex justify-between flex-col items-center gap-2">
                                        <Link className="w-full text-center bg-[#2563BE] h-[32px] text-white rounded-lg" href={`/post/edit/${post.id}`}>Edit</Link>
                                        <DeletePost id={`${post.id}`} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <Link className="w-[120px] flex items-center justify-center mx-auto  h-[40px] mt-[20px] mb-[20px] bg-green-600 text-white" href="/post/add">Add</Link>
            </div>
        </Suspense>
    )
}


export default post
