import React, { useState } from 'react'
import Loading from '../../assets/loading.gif'
import useForm from '../../hooks/useForm'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import { login } from '../../Services/users.js'
import { Form, ButtonContinue, LoadingGif } from './LoginStyled'
import {useNavigate} from 'react-router-dom'

const LoginForm = () => {
  const {form, onChange, cleanFields} = useForm({email: "", password: ""})
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  useUnprotectedPage()

  const onSubmitFormLogin = (event) => {
    event.preventDefault()
    login(form, cleanFields, navigate, setIsLoading)
  }

  return (
        <Form onSubmit={onSubmitFormLogin}>
          <input name={"email"} value={form.email} onChange={onChange} type="email" placeholder='E-mail' required></input>
          <input name={"password"} value={form.password} onChange={onChange} type="password" placeholder='Senha' required></input>
        <ButtonContinue type='submit'>
          {isLoading ? <LoadingGif src={Loading}/> : <>Continuar</>}
          </ButtonContinue>
        </Form>
  )
}

export default LoginForm