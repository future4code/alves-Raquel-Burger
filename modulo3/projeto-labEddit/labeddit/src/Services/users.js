import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToFeed } from '../routes/coordinator'
import { toast } from 'react-toastify'


export const login = ( body, cleanFields, navigate, loading) => {

    loading(true)
    axios.post(`${BASE_URL}/users/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            cleanFields()
            loading(false)
            goToFeed(navigate)
            toast.success("Logado com sucesso")
        })
        .catch((err) => {
            alert(err.response.data)
            loading(false)
        })
}

export const register = (body, cleanFields, navigate, loading) => {
    loading(true)
    axios.post(`${BASE_URL}/users/signup`, body)
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        goToFeed(navigate)
        loading(false)
        cleanFields()
        toast.success("Cadastro criado com sucesso")

      })
      .catch((err) => {
        loading(false)
        alert(err.response.data)
      })
  }