import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToListTrips, goToAdmin } from '../../routes/coordinator.js'
import { Button, ContainerButton, ContainerHome } from './HomeStyled.js'


function HomePage() {
  const navigate = useNavigate()


  return (
    <ContainerHome>
      Olá tripulante, como deseja continuar?
      <ContainerButton>
        <Button onClick={() => goToListTrips(navigate)}>Ver Viagens</Button>
        <Button onClick={() => goToAdmin(navigate)}>Área Admin</Button>
      </ContainerButton>

    </ContainerHome>

  )
}

export default HomePage