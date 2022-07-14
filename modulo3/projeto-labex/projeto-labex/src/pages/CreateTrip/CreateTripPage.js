import React from 'react'
import {goBack} from '../../routes/coordinator.js'
import {useNavigate} from 'react-router-dom'



function CreateTripPage() {
  const navigate = useNavigate()

  return (
    <div>
      Criar viagem
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={''}>Criar</button>
      </div>
  )
}

export default CreateTripPage