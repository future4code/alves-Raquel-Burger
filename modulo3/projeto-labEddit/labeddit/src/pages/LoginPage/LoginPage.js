import React from 'react'
import Logo from '../../assets/logoLogin.png'
import Line from '../../assets/line.svg'
import { ContainerLogo, LogoLogin, LogoBigText, LogoTextSmall, ContainerLogin, ContainerInputs, ContainerButtons, ButtonContinue, ButtonCreate, LineImg, Form } from './LoginStyled'

const LoginPage = () => {
  return (
    <ContainerLogin>
      <ContainerLogo>
        <LogoLogin src={Logo} />
        <LogoBigText>LabEddit</LogoBigText>
        <LogoTextSmall>O projeto de rede social da Labenu</LogoTextSmall>
      </ContainerLogo>
        <Form onSubmit={""}>
          <input placeholder='E-mail'></input>
          <input placeholder='Senha'></input>
        </Form>
      <ContainerButtons>
        <ButtonContinue>Continuar</ButtonContinue>
        <LineImg src={Line} alt="Linha separação de botões" />
        <ButtonCreate>Crie uma conta</ButtonCreate>
      </ContainerButtons>
    </ContainerLogin>

  )
}

export default LoginPage