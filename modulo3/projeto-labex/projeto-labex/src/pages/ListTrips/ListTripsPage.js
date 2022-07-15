import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, goToApplicationForm } from '../../routes/coordinator.js'
import { BASE_URL } from '../../constants/urls'
import UseRequestData from '../../hooks/UseRequestData'
import { ButtonTrip, ContainerTopTrips, ContainerTrip, ContainerTrips, GifC3po } from './ListTripsStyled.js'
import C3PO from '../../assets/c3po.gif'

function ListTripsPage() {
  const navigate = useNavigate()
  const [listTrip, isLoading, error] = UseRequestData(`${BASE_URL}trips`)

  const showTrips = () => {
    if (isLoading) {
      return (
        <GifC3po src={C3PO} alt ='gif c3po loading'/>
      )
    } else if (!isLoading && error) {
      return (
        <p>{error}</p>
      )
    } else if (listTrip.trips && listTrip.trips.length > 0) {
      return (
        listTrip.trips.map((trip) => {
          return (
            <ContainerTrip key={trip.id}>
              <h4>{trip.name}</h4>
              <p>{trip.description}</p>
              <p>Planeta: {trip.planet}</p>
              <p>Duração: {trip.durationInDays} dias</p>
              <p>Data de partida: {trip.date}</p>
            </ContainerTrip>
          )
        })
      )
    }
  }
  return (
    <div>
      <ContainerTopTrips>
        <div>
          <p>Já decidiu para onde ir?</p>
          <p>Da uma olhada nessas opções...</p>
        </div>
        <div>
          <ButtonTrip onClick={() => goBack(navigate)}>Voltar</ButtonTrip>
          <ButtonTrip onClick={() => goToApplicationForm(navigate)}>Inscrever-se</ButtonTrip>
        </div>
      </ContainerTopTrips>
      <ContainerTrips>
        {showTrips()}
      </ContainerTrips>
    </div>
  )
}

export default ListTripsPage