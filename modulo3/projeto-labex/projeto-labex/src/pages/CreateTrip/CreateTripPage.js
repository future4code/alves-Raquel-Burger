import React from 'react'
import {goBack} from '../../routes/coordinator.js'
import {useNavigate} from 'react-router-dom'
import useForm from '../../hooks/useForm.js'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls.js'
import { ButtonCreateTrip, ContainerCreate, Form } from './CreateTripStyled.js'


function CreateTripPage() {
  const navigate = useNavigate()
  const { form, onChange, cleanFields } = useForm({
    name: "", 
    planet: "",
    date: "", 
    description: "", 
    durationInDays: "", 
    })

  const onSubmitCreateTrip = (event) => {
    event.preventDefault()
    const token = localStorage.getItem('token')
    axios.post(`${BASE_URL}trips`, form, {
      headers: {
        auth: token
      }
    })
    .then((res) => {
      console.log("viagem criada", form, res)
      cleanFields()
    })
    .catch((err) => {
      console.log(err.response)
    })
  }
  return (
    <ContainerCreate>
      <h4>Criar Nova Viagem</h4>
      <Form onSubmit={onSubmitCreateTrip}>
      <input name={'name'} value={form.name} onChange={onChange} placeholder='Nome' required pattern={'^.{3,}'} title={'O nome deve ter mínimo 3 letras'}/>
      <input name={'planet'} value={form.planet} onChange={onChange} placeholder='Planeta' required />
      <input name={'date'} value={form.date} onChange={onChange} placeholder='dd/mm/aaaa' required type={'date'} />
      <input name={'description'} value={form.description} onChange={onChange} placeholder='Descrição' required />
      <input name={'durationInDays'} value={form.durationInDays} onChange={onChange} placeholder='Duração em dias' required type={'number'}/>
      <ButtonCreateTrip>Criar</ButtonCreateTrip>
      </Form>
      <ButtonCreateTrip onClick={() => goBack(navigate)}>Voltar</ButtonCreateTrip>
      </ContainerCreate>
  )
}

export default CreateTripPage