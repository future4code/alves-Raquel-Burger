import React from 'react'
import {useNavigate} from 'react-router-dom'
import {goBack, goToApplicationForm} from '../../routes/coordinator'


function ListTripsPage() {
  const navigate = useNavigate()

 
  return (
    <div>
      Lista de viagens
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={() => goToApplicationForm(navigate)}>Inscrever-se</button>
      </div>
  )
}

export default ListTripsPage