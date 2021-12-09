import axios from "axios"

// interface headers {

// }

type callbackFn = (response: any) => Promise<any>

export const getPosts = (route: string, fn: callbackFn ) => axios.get(route).then(fn)