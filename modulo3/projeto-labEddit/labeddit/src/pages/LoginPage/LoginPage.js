import React from 'react'
import {useNavigate} from 'react-router-dom'
import Logo from '../../assets/logoLogin.png'
import Line from '../../assets/line.svg'
import { ContainerLogo, LogoLogin, LogoBigText, LogoTextSmall, ContainerLogin,  ButtonCreate, LineImg} from './LoginStyled'
import { goToSingUp} from '../../routes/coordinator'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import LoginForm from './LoginForm'

const LoginPage = () => {
  const navigate = useNavigate()
  useUnprotectedPage()

  return (
    <ContainerLogin>
      <ContainerLogo>
        <LogoLogin src={Logo} />
        <LogoBigText>LabEddit</LogoBigText>
        <LogoTextSmall>O projeto de rede social da Labenu</LogoTextSmall>
      </ContainerLogo>
      <div>
      <LoginForm />
      <LineImg src={Line} alt="Linha separação de botões" />
      <ButtonCreate onClick={() => goToSingUp(navigate)}>Crie uma conta</ButtonCreate>
      </div>
     
    </ContainerLogin>

  )
}

export default LoginPage