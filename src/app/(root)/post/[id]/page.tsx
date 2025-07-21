import { showPostProps } from '@/interfaces/interfacess'
import React from 'react'

const ShowPost = ({ params }: showPostProps) => {

    return (
        <div>
            this post is {params.id}
        </div>
    )
}

export default ShowPost
