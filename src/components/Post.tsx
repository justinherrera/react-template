import React from 'react'
import { useQuery, UseQueryResult } from "react-query"
import { getPost } from "../api/useQuery"
import { useParams } from "react-router-dom";

const Post: React.FC = () => {

    let { id } = useParams();

    const { isFetching, error, data }: UseQueryResult<Post, Error> = useQuery<Post, Error>("post", async (): Promise<any> => {
    
        return await getPost(`https://jsonplaceholder.typicode.com/posts/${id}`, (response) => {
            return response.data
        })
    })

    
    if (isFetching) return <h2>Loading...</h2>

    if (error) return <h2>{error.message}</h2>

    if (data) {

        return (
            <div>
                Post here
                {data.id} - {data.title}
            </div>
        )
    } 

    return <p>No Post Found</p>
}

export default Post
