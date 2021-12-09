import { useQuery, UseQueryResult } from "react-query"
import { getPosts } from "../api/useQuery"

type Data = {
    userId: number
    id: number
    title: string
    body: string
}

type Posts = {
    data: Data[]
    map: (post: any) => any
}

const fetchPosts = async (): Promise<any> => {

    return await getPosts("https://jsonplaceholder.typicode.com/posts", (response) => {
        return response.data
    })
}


const Test: React.FC = () => {
    const { isFetching, error, data }: UseQueryResult<Posts, Error> = useQuery<Posts, Error>("posts", fetchPosts)
    
    if (isFetching) return <h2>Loading...</h2>

    if (error) return <h2>{error.message}</h2>

    if (data) {

        return (
            <div>
                <h2>Posts</h2>
                {
                    data.map((post: any) => {
                        return <div key={post.id}>{post.title}</div>
                    })
                }
            </div>
        )
    } 

    return <p>No Data Found</p>
}

export default Test