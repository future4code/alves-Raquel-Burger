import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'
import axios from 'axios'

function TripDetailsPage() {
  const pathParams = useParams()

  useEffect(() => {
    axios.get(`${BASE_URL}${pathParams}`)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [pathParams])
  return (
    <div>Detalhes da viagem</div>
  )
}

export default TripDetailsPage