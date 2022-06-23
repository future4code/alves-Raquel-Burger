import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ContainerUser = styled.div`
  border: 1px black dotted;
  display: flex;
  height: 40px;
  padding: 5px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`
const Button = styled.button`
  height: 20px;
  
`

export default class TelaDetalhes extends Component {
  render() {
    const listUsers = this.props.users.map((user) => {
       
        return (
        <ContainerUser key={user.id}>
            <p>Nome: {user.name}</p>
            <Button onClick={() => {this.props.delete(user.id)}}>Delete</Button>
        </ContainerUser>
        )
    })
    return (
        <div>
            <button onClick={() => {this.props.changeScreen("inicial")}}>Trocar de tela</button>
            <h3>Lista Usuários</h3>
            {listUsers}
            <hr/>
            <h4>Procurar usuário</h4>

            <input type='text' placeholder='Nome exato para busca'></input>
            <button>Salvar edição</button>
        </div>
    
    )
  }
}
