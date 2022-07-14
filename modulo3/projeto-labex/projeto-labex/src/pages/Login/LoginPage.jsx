import React from 'react'
import {useNavigate} from 'react-router-dom'
import {goBack, goToAdmin} from '../../routes/coordinator'



function LoginPage() {
  const navigate = useNavigate()
  return (
    <div>
      LoginPage
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={() => goToAdmin(navigate)}>Entrar</button>
    </div>
  )
}

export default LoginPage