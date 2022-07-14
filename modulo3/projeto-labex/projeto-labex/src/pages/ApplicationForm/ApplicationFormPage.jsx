import React from 'react'
import {useNavigate} from 'react-router-dom'
import {goBack} from '../../routes/coordinator'


function ApplicationFormPage() {
  const navigate = useNavigate()

  return (
    <div>
      Inscrever-se para uma viagem
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={''}>Enviar</button>
    </div>
  )
}

export default ApplicationFormPage