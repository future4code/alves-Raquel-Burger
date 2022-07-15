import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToIndex, goToAdmin } from '../../routes/coordinator.js'
import { ButtonHeader, ContainerHeader } from './HeaderStyled.js'
import Logo from '../../assets/logo.png'

const Header = () => {
  const navigate = useNavigate()
  return (
    <ContainerHeader>
      <img src={Logo} alt='Logo C3PO' height='100px' width='100px' />
      <div>
        <ButtonHeader onClick={() => goToIndex(navigate)}>Home</ButtonHeader>
        <ButtonHeader onClick={() => goToAdmin(navigate)}>Admin</ButtonHeader>
      </div>

    </ContainerHeader>
  )
}

export default Header