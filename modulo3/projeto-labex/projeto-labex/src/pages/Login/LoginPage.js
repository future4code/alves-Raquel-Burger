import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {goBack, goToAdmin} from '../../routes/coordinator.js'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'


function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState ("")

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const onSubmitLogin = () => {
    console.log(email, password)
    const body = {
      email: email,
      password: password
    }
    axios.post(`${BASE_URL}login`, body)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  return (
    <div>
      LoginPage
      <input
      placeholder='email'
      type='email'
      value={email}
      onChange={onChangeEmail}
      />
      <input
      placeholder='password'
      type='password'
      value={password}
      onChange={onChangePassword}
      />
      <button onClick={onSubmitLogin}>Enviar</button>
      <hr />
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={() => goToAdmin(navigate)}>Entrar</button>
    </div>
  )
}

export default LoginPage