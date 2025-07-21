import { getInfoPost } from "@/apiCalls/postsApiCalls"
import { editProps } from "@/interfaces/interfacess"
import FormEdit from "./FormEdit"
import { Post } from "@prisma/client"


const page = async ({ params }: editProps) => {
    const response: Post = await getInfoPost((await params).id)
    return (
        <div>
            <FormEdit response={response} submit="Edit" rows={5} />
        </div>
    )
}

export default page
