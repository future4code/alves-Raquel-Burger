import React from 'react'
import {useNavigate} from 'react-router-dom'
import {goBack, goToCreateTrip, goToLogin} from '../../routes/coordinator'


function AdminPage() {
  const navigate = useNavigate()

  return (
    <div>
      Painel Administrativo
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={() => goToCreateTrip(navigate)}>Criar Viagem</button>
      <button onClick={() => goToLogin(navigate)}>Logout</button>

      </div>
  )
}

export default AdminPage