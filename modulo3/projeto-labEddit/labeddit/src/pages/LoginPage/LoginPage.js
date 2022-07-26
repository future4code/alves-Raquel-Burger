import React from 'react'
import {useNavigate} from 'react-router-dom'
import Logo from '../../assets/logoLogin.png'
import Line from '../../assets/line.svg'
import { ContainerLogo, LogoLogin, LogoBigText, LogoTextSmall, ContainerLogin, ButtonContinue, ButtonCreate, LineImg, Form } from './LoginStyled'
import useForm from '../../hooks/useForm'
import { goToFeed, goToSingUp } from '../../routes/coordinator'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const LoginPage = () => {
  const {form, onChange, cleanFields} = useForm({email: "", password: ""})
  const navigate = useNavigate()
  useUnprotectedPage()

  const onSubmitFormLogin = (event) => {
    event.preventDefault()
    login()
  }

  const login = () => {
    axios.post(`${BASE_URL}/users/login`, form)
    .then((res) => {
      console.log(res)
      localStorage.setItem("token", res.data.token)
      cleanFields()
      goToFeed(navigate)
    })
    .catch((err) => {
      alert(err.response.data)
    })
  }


  return (
    <ContainerLogin>
      <ContainerLogo>
        <LogoLogin src={Logo} />
        <LogoBigText>LabEddit</LogoBigText>
        <LogoTextSmall>O projeto de rede social da Labenu</LogoTextSmall>
      </ContainerLogo>
        <Form onSubmit={onSubmitFormLogin}>
          <input name={"email"} value={form.email} onChange={onChange} placeholder='E-mail' required></input>
          <input name={"password"} value={form.password} onChange={onChange} type="password" placeholder='Senha' required></input>
        <ButtonContinue type='submit'>Continuar</ButtonContinue>
        <LineImg src={Line} alt="Linha separação de botões" />
        <ButtonCreate onClick={() => goToSingUp(navigate)}>Crie uma conta</ButtonCreate>
        </Form>
    </ContainerLogin>

  )
}

export default LoginPage