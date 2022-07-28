import React, {useState} from 'react'
import { BigText, ButtonRegister, ContainerCheckBox, ContainerSingUp, FormSingUp, LegalText, LoadingGif } from './SingUpStyled'
import useForm from '../../hooks/useForm'
import { BASE_URL } from '../../constants/urls'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import axios from 'axios'
import { goToFeed } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import Loading from '../../assets/loading.gif'




const SingUpPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const {form, onChange, cleanFields} = useForm({ username: "", email: "", password: "" })
  useUnprotectedPage()

  const onSubmitFormRegister = (event) => {
    event.preventDefault()
    register(form, cleanFields, navigate)

  }

  const register = (form, cleanFields, navigate) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/users/signup`, form)
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        goToFeed(navigate)
        setIsLoading(false)
        cleanFields()
      })
      .catch((err) => {
        setIsLoading(false)
        alert(err.response.data)
      })
  }

  return (
    <ContainerSingUp>
      <BigText>
        Olá, boas vindas ao LabEddit ;)
      </BigText>
      <FormSingUp onSubmit={onSubmitFormRegister}>
        <input name={"username"} value={form.username} onChange={onChange} placeholder='Nome de usuário' required></input>
        <input name={"email"} value={form.email} onChange={onChange} placeholder='E-mail' required></input>
        <input name={"password"} value={form.password} onChange={onChange} placeholder='Senha' pattern={'^.{8,30}'} type="password" title={"A senha deve conter no mínimo 8 e no máximo 30 caracteres"} required></input>
        <LegalText>
          Ao continuar, você concorda com o nosso <a href='http://www.google.com.br'>Contrato de usuário</a> e nossa <a href='http://www.google.com.br'>Política de Privacidade</a>
        </LegalText>
        <ContainerCheckBox>
          <input type="checkbox" />
          <LegalText>Eu concordo em receber emails sobre coisas legais no Labeddit</LegalText>
        </ContainerCheckBox>
        <ButtonRegister type='submit'>
        {isLoading ? <LoadingGif src={Loading}/> : <>Cadastrar</>}
        </ButtonRegister>
      </FormSingUp>
    </ContainerSingUp>
  )
}

export default SingUpPage