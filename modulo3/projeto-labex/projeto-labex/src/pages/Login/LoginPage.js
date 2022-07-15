import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, goToAdmin } from '../../routes/coordinator.js'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import useForm from '../../hooks/useForm.js'


function LoginPage() {
  const navigate = useNavigate()
  const {form, onChange, cleanFields} = useForm({email: "", password: ""})
 
  const onSubmitLogin = (event) => {
    event.preventDefault()

    axios.post(`${BASE_URL}login`, form)
      .then((response) => {
        localStorage.setItem('token', response.data.token)
        goToAdmin(navigate)
        cleanFields()
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  return (
    <div>
      LoginPage
      <form onSubmit={onSubmitLogin}>
        <input
          name='email'
          placeholder='email'
          type='email'
          value={form.email}
          onChange={onChange}
          required
        />
        <input
          name='password'
          placeholder='password'
          type='password'
          value={form.password}
          onChange={onChange}
          required
          pattern={"^.{3,}"}
          title={"Sua senha deve ter no mínimo 3 caracteres"}
        />
        <button>Fazer Login</button>
      </form>
      <hr />
      <button onClick={() => goBack(navigate)}>Voltar</button>
    </div>
  )
}

export default LoginPage