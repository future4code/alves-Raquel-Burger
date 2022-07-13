import React from 'react'
import {useNavigate} from 'react-router-dom'


function ListTripsPage() {
  const navigate = useNavigate()

  const goToApplicationForm = () => {
    navigate("/application")
  }

  const goBack = () => {
    navigate(-1)
  }
  return (
    <div>
      ListTripsPage
      <button onClick={goBack}>Voltar</button>
      <button onClick={goToApplicationForm}>Inscrever-se</button>
      </div>
  )
}

export default ListTripsPage