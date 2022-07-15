import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'
import UseProtectedPage from '../../hooks/UseProtectedPage'

function TripDetailsPage() {
  const pathParams = useParams()
  const [trip, setTrip] = useState({})

  UseProtectedPage()
  
  useEffect(() => {
    const token = localStorage.getItem('token')
    axios.get(`${BASE_URL}trip/${pathParams.id}`, {
      headers: {
        auth: token
      }
    })
    .then((res) => {
      console.log(res)
      setTrip(res.data.trip)
    })
    .catch((err) => {
      console.log(err.response)
    })
  }, [pathParams])
  return (
    <div>
      Detalhes da viagem
      {trip.name}
      {trip.description}
      {trip.planet}
      {trip.duration}
      {trip.date}

      <p>Candidatos Pendentes</p>

      <p>Candidatos Aprovados</p>
      
        
      </div>
  )
}

export default TripDetailsPage