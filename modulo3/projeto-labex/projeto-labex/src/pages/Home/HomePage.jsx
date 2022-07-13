import React from 'react'
import {useNavigate} from 'react-router-dom'

function HomePage() {
  const navigate = useNavigate()

  const goToListTrips = () => {
    navigate("/listTrips")
  }
  return (
    <div>
      HomePage
      <button onClick={goToListTrips}>Lista Viagens</button>
      </div>
    
  )
}

export default HomePage