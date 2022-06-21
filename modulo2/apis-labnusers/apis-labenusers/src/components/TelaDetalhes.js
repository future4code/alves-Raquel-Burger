import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'



export default class TelaDetalhes extends Component {
  render() {
    const listUsers = this.props.users.map((user) => {
       
        return (
        <div key={user.id}>
            <p>Nome: {user.name}</p>
            <button onClick={() => {this.props.delete(user.id)}}>Delete</button>
        </div>
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
