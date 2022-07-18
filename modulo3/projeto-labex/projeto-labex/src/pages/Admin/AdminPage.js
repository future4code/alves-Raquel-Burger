import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, goToCreateTrip, goToLogin, goToDetails } from '../../routes/coordinator.js'
import { BASE_URL } from '../../constants/urls'
import UseRequestData from '../../hooks/UseRequestData'
import UseProtectedPage from '../../hooks/UseProtectedPage'
import axios from 'axios'
import Falcon from '../../assets/falcon.gif'
import { ButtonTrip, ContainerAdminTrip, ContainerAdminTrips, ContainerTopAdmin } from './AdminStyled.js'
import { Gif } from '../ListTrips/ListTripsStyled.js'
import { toast } from 'react-toastify';


function AdminPage() {
  UseProtectedPage()
  const navigate = useNavigate()
  const [listTrip, isLoading, error] = UseRequestData(`${BASE_URL}trips`)

  const onClickDeleteTrip = (id) => {
    const token = localStorage.getItem('token')
    axios.delete(`${BASE_URL}trips/${id}`, {
      headers: {
        auth: token
      }
    })
      .then((res) => {
        console.log("deletou", res)
        showTrips()
        toast.info('Viagem deletada com sucesso!')
        document.location.reload(true)
      })
      .catch((err) => {
        toast.error(`Erro ao deletar viagem ${err.response}`)
      })

  }

  const showTrips = () => {
    if (isLoading) {
      return (
        <Gif src={Falcon} alt ='gif Millenium Falcon loading'/>
      )
    } else if (!isLoading && error) {
      return (
        <p>{error}</p>
      )
    } else if (listTrip.trips && listTrip.trips.length > 0) {
      return (
        listTrip.trips.map((trip) => {
          return (
            <ContainerAdminTrip key={trip.id}>
              <p>{trip.name}</p>
              <p>{trip.description}</p>
              <p>Planeta: {trip.planet} | Duração: {trip.durationInDays} dias </p>
              <p>Saída: {trip.date}</p>
              <div>
                <ButtonTrip onClick={() => goToDetails(navigate, trip.id)}>Detalhes</ButtonTrip>
                <ButtonTrip onClick={() => onClickDeleteTrip(trip.id)}>Deletar</ButtonTrip>
              </div>
            </ContainerAdminTrip>
          )
        })
      )
    }

  }

  return (
    <div>
      <ContainerTopAdmin>
        <ButtonTrip onClick={() => goBack(navigate)}>Voltar</ButtonTrip>
        <ButtonTrip onClick={() => goToCreateTrip(navigate)}>Criar Viagem</ButtonTrip>
        <ButtonTrip onClick={() => goToLogin(navigate)}>Logout</ButtonTrip>
      </ContainerTopAdmin>
      <ContainerAdminTrips>
        {showTrips()}

      </ContainerAdminTrips>
    </div>
  )
}

export default AdminPage