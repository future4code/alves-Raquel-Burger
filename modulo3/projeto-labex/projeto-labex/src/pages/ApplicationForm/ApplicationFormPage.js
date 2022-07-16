import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../../routes/coordinator.js'
import useForm from '../../hooks/useForm.js'
import { Countries } from '../../components/Counstries.js'
import {ContainerApplication, Form} from './ApplicationFormStyled'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls.js'
import UseRequestData from '../../hooks/UseRequestData'



function ApplicationFormPage() {
  const navigate = useNavigate()
  const { form, onChange, cleanFields } = useForm({
     name: "", 
     age: "", 
     applicationText: "", 
     profession: "",
     country: "",
     tripId: ""
     })
    
  const [listTrip, isLoading, error] = UseRequestData(`${BASE_URL}trips`)
  const optionSelect = () => {
    if (isLoading) {
      return(
        <option>Carregando...</option>
      )
    } else if (!isLoading && error) {
      return(
        <option>Erro ao carregar opções</option>
      )
    } else if (listTrip.trips && listTrip.trips.length > 0) {
      return (
        listTrip.trips.map((trip) => {
          return (
            <option key={trip.id} value={trip.id}>{trip.name}</option>
          )
        })
      )}
  }
  const onSubmitApplication = (event) => {
    event.preventDefault()
    axios.post(`${BASE_URL}trips/${form.tripId}/apply`, form)
    .then((res) => {
      console.log("formulario enviado", res, form)
      cleanFields()
    })
    .catch((err) => {
      console.log(err.response)
    })
  }

  return (
    <ContainerApplication>
      <p>Bora então?</p>
      <p>Preencha os dados abaixo que nosso time entrará em contato em breve.</p>
      <Form onSubmit={onSubmitApplication}>
        <select name={'tripId'} value={form.tripId} onChange={onChange} required>
          <option value="">Selecione um de nossos destinos</option>
          {optionSelect()}
        </select>
        <input name={'name'} value={form.name} onChange={onChange} placeholder='Nome' required pattern={'^.{3,}'} title={'O nome deve ter mínimo 3 letras'}/>
        <input name={'age'} value={form.age} onChange={onChange} placeholder='Idade' required type={'number'} min={18} />
        <input name={'applicationText'} value={form.applicationText} onChange={onChange} placeholder='Texto de candidatura' required />
        <input name={'profession'} value={form.profession} onChange={onChange} placeholder='Profissão' required />
        <select 
        name={'country'}
        value={form.country}
        onChange={onChange} required>
          <option value={''}>País de origem:</option> 
          {Countries.map((country) => {
            return (
              <option value={country} key={country}>{country}</option>
            )
          })}      

        </select>
        <button>Inscrever-se</button>
      </Form>
      <button onClick={() => goBack(navigate)}>Voltar</button>
    </ContainerApplication>
  )
}

export default ApplicationFormPage