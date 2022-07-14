import React from 'react'
import {useNavigate} from 'react-router-dom'
import {goToListTrips, goToAdmin} from '../../routes/coordinator.js'

function HomePage() {
  const navigate = useNavigate()

 
  return (
    <div>
      HomePage
      <button onClick={() => goToListTrips(navigate)}>Ver Viagens</button>
      <button onClick={() => goToAdmin(navigate)}>Área de Admin</button>
      </div>
    
  )
}

export default HomePage