import { showPostProps } from '@/interfaces/interfacess'
import React from 'react'

const ShowPost = async ({ params }: showPostProps) => {
    const { id } = await params

    return (
        <div>
            this post is {id}
        </div>
    )
}

export default ShowPost
