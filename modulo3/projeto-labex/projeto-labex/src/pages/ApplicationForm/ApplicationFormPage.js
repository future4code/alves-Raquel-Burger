import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../../routes/coordinator.js'
import useForm from '../../hooks/useForm.js'


function ApplicationFormPage() {
  const navigate = useNavigate()
  const { form, onChange, cleanFields } = useForm({
     name: "", 
     age: "", 
     email: "", 
     applicationText: "", 
     profession: ""
     })
  const onSubmitApplication = (event) => {
    event.preventDefault()
    console.log("formulario enviado", form)
    cleanFields()
  }

  return (
    <div>
      Inscrever-se para uma viagem
      <form onSubmit={onSubmitApplication}>
        <input name={'name'} value={form.name} onChange={onChange} placeholder='Nome' required pattern={'^.{3,}'} title={'O nome deve ter mínimo 3 letras'}/>
        <input name={'age'} value={form.age} onChange={onChange} placeholder='Idade' required type={'number'} min={18} />
        <input name={'email'} value={form.email} onChange={onChange} placeholder='E-mail' required type={'email'}/>
        <input name={'applicationText'} value={form.applicationText} onChange={onChange} placeholder='Texto de candidatura' required />
        <input name={'profession'} value={form.profession} onChange={onChange} placeholder='Profissão' required />
        <button>Inscrever-se</button>
      </form>
      <button onClick={() => goBack(navigate)}>Voltar</button>
    </div>
  )
}

export default ApplicationFormPage