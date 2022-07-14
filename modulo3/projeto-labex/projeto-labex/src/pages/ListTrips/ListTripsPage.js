import React from 'react'
import {useNavigate} from 'react-router-dom'
import {goBack, goToApplicationForm, goToDetails} from '../../routes/coordinator.js'
import { BASE_URL } from '../../constants/urls'
import UseRequestData from '../../hooks/UseRequestData'

function ListTripsPage() {
  const navigate = useNavigate()
  const [listTrip, isLoading, error] = UseRequestData(`${BASE_URL}trips`)

  const showTrips = () => {
    if (isLoading) {
      return (
        <p>Carregando...</p>
      )
    }else if (!isLoading && error) {
      return (
        <p>{error}</p>
      )
    }else if (listTrip.trips && listTrip.trips.length > 0) {
      return (
        listTrip.trips.map((trip) => {
          return (
            <div key={trip.id}>
              <p>{trip.name}</p>
              <p>{trip.description}</p>
              <p>{trip.planet}</p>
              <p>{trip.duration}</p>
              <p>{trip.date}</p>
            </div>
          )
        })
      )
    }
  }
  return (
    <div>
      Lista de viagens
      {showTrips()}
     
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={() => goToApplicationForm(navigate)}>Inscrever-se</button>
      </div>
  )
}

export default ListTripsPage