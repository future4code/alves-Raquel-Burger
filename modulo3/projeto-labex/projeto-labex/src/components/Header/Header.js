import React from 'react'
import {useNavigate} from 'react-router-dom'
import {goToIndex, goToAdmin, goBack} from '../../routes/coordinator.js'

const Header = () => {
  const navigate = useNavigate()
  return (
    <div>
      Header
      <button onClick={() => goToIndex(navigate)}>Home</button>
      <button onClick={() => goToAdmin(navigate)}>Área de Admin</button>
      <button onClick={() => goBack(navigate)}>Voltar</button>
    </div>
  )
}

export default Header