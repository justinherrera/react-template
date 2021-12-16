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

type Post = {
    id: number,
    title: string,
}
