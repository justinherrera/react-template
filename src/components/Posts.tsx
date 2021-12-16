import { useQuery, UseQueryResult } from "react-query"
import { getPosts } from "../api/useQuery"
import { Link } from "react-router-dom";

const fetchPosts = async (): Promise<any> => {

    return await getPosts("https://jsonplaceholder.typicode.com/posts", (response) => {
        return response.data
    })
}

const Posts: React.FC = () => {
    const { isFetching, error, data }: UseQueryResult<Posts, Error> = useQuery<Posts, Error>("posts", fetchPosts)
    
    if (isFetching) return <h2>Loading...</h2>

    if (error) return <h2>{error.message}</h2>

    if (data) {

        return (
            <div>
                <h2>Posts</h2>
                {
                    data.map((post: any) => {
                        return (
                            <>
                                <Link 
                                    to={`/posts/${post.id}`} 
                                    key={post.id}>
                                        {post.title}
                                </Link>
                                <br />
                            </>
                        )
                    })
                }
            </div>
        )
    } 

    return <p>No Data Found</p>
}

export default Posts
