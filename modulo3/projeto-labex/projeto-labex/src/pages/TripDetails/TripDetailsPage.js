import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'
import UseProtectedPage from '../../hooks/UseProtectedPage'

function TripDetailsPage() {
  const pathParams = useParams()
  const [trip, setTrip] = useState({})
  const [candidates, setCandidates] = useState([])
  const [approved, setApproved] = useState([])

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
        setCandidates(res.data.trip.candidates)
        setApproved(res.data.trip.approved)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }, [pathParams])

  const candidatesList = candidates?.map((candidate) => {
    return (
      <div key={candidate.id}>
        <p>Nome: {candidate.name}</p>
        <p>Idade: {candidate.age}</p>
        <p>Texto: {candidate.applicationText}</p>
        <p>País: {candidate.country}</p>
        <p>Profissão: {candidate.profession}</p>
        <button onClick={() => decideCandidate(candidate.id, true) }>Aprovar</button>
        <button>Reprovar</button>
      </div>
    )
  })

  const approvedList = approved?.map((approved) => {
    return (
      <ul key={approved.id}>{approved.name}</ul>)
  })

  const showTrip = () => {
    if (trip) {
      return (
        <div>
          Detalhes da viagem
          {trip.name}
          {trip.description}
          {trip.planet}
          {trip.duration}
          {trip.date}

          <p>Candidatos Pendentes</p>
          {candidatesList}

          <p>Candidatos Aprovados</p>
          {approvedList}

        </div>
      )
    } else {
      return (
        <p>Carregando...</p>
      )
    }
  }

  const decideCandidate = (id, choice) => {
    const token = localStorage.getItem('token')
    const body = {
      approve: choice
    }
    axios.put(`${BASE_URL}trips/${trip.id}/candidates/${id}/decide`, body, {
      headers: {
        auth: token
      }
    })
    .then((res) => {
      if(choice === true) {
        console.log("aprovado")
      } else {
        console.log("reprovado")
      }
      document.location.reload(true)
    })
    .catch((err) => {
      console.log(err)
    })
  }




  return (
    <div>
      {showTrip()}
    </div>
  )
}

export default TripDetailsPage