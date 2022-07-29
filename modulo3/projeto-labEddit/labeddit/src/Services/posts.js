import axios from 'axios'
import { BASE_URL } from '../constants/urls'

export const createPost = (body, cleanFields, setRefresh, refresh, setIsLoading ) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res) => {
        cleanFields()
        setIsLoading(false)
        setRefresh(!refresh)
        alert("post criado")
    })
    .catch((err) => {
        setIsLoading(false)
    })
}

export const  createComment = (body, id, cleanFields, setRefresh, refresh, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/posts/${id}/comments`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res) => {
        cleanFields()
        setIsLoading(false)
        setRefresh(!refresh)
        alert("comentário criado")

    })
    .catch((err) => {
        setIsLoading(false)
    })
}