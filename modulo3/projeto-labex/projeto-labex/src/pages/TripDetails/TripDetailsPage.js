import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'
import axios from 'axios'

function TripDetailsPage() {
  const pathParams = useParams()
  console.log(pathParams)
  useEffect(() => {
    const token = localStorage.getItem('token')
    axios.get(`${BASE_URL}trip/${pathParams.id}`, {
      headers: {
        auth: token
      }
    }
   )
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err.response)
    })
  }, [pathParams])
  return (
    <div>Detalhes da viagem</div>
  )
}

export default TripDetailsPage