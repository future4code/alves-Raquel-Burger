import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'
import UseProtectedPage from '../../hooks/UseProtectedPage'
import {goBack} from '../../routes/coordinator.js'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import { ButtonAdminDetail, ContainerAdminDetails, ContainerAdminTripDetail } from './TripDetailsStyled'

function TripDetailsPage() {
  const navigate = useNavigate()
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
        <ButtonAdminDetail onClick={() => decideCandidate(candidate.id, true)}>Aprovar</ButtonAdminDetail>
        <ButtonAdminDetail>Reprovar</ButtonAdminDetail>
      </div>
    )
  })

  const approvedList = approved?.map((approved) => {
    return (
      <div key={approved.id}>
        <p>{approved.name}</p>
        </div>)
  })

  const showTrip = () => {
    if (trip) {
      return (
        <ContainerAdminDetails>
          <ContainerAdminTripDetail>
          <h3>Detalhes da viagem</h3>
          <h4>{trip.name}</h4>
          <p>{trip.description}</p>
          <p>Planeta: {trip.planet} | Duração: {trip.duration} dias </p>
          <p>Saída: {trip.date}</p>

          <h4>Candidatos Pendentes</h4>
          {candidatesList}

          <h4>Candidatos Aprovados</h4>
          {approvedList}
          <ButtonAdminDetail onClick={() => goBack(navigate)}>Voltar</ButtonAdminDetail>
          </ContainerAdminTripDetail>
      

        </ContainerAdminDetails>
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
        if (choice === true) {
          console.log("aprovado")
          toast.success("Candidato aprovado com sucesso")
        } else {
          toast.info("Candidato reprovado com sucesso")
        }
        document.location.reload(true)
      })
      .catch((err) => {
        toast.error(`Erro ${err.response} ao tentar efetuar decisão`)
      })
  }


  return (
    <div>
      {showTrip()}
    </div>
  )
}

export default TripDetailsPage