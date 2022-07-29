import React, {useState} from 'react'
import {ButtonRegister, ContainerCheckBox, FormSingUp, LegalText, LoadingGif } from './SingUpStyled'
import useForm from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import Loading from '../../assets/loading.gif'
import { register } from '../../Services/users'

const SingUpForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const {form, onChange, cleanFields} = useForm({ username: "", email: "", password: "" })

  const onSubmitFormRegister = (event) => {
    event.preventDefault()
    register(form, cleanFields, navigate, setIsLoading)
  }

  return (
 
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
  )
}

export default SingUpForm