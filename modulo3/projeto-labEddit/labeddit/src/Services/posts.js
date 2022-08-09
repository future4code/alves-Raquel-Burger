import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { toast } from 'react-toastify'

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
        toast.success("Post criado com sucesso!")
    })
    .catch((err) => {
        setIsLoading(false)
        toast.error(err.response.data)
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
        toast.success("Comentário criado com sucesso!")

    })
    .catch((err) => {
        setIsLoading(false)
        toast.error(err.response.data)
    })
}