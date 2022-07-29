import React from 'react'
import { BigText, ContainerSingUp } from './SingUpStyled'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import SingUpForm from './SingUpForm'

const SingUpPage = () => {
  useUnprotectedPage()

  return (
    <ContainerSingUp>
      <BigText>
        Olá, boas vindas ao LabEddit ;)
      </BigText>
      <SingUpForm/>
    </ContainerSingUp>
  )
}

export default SingUpPage