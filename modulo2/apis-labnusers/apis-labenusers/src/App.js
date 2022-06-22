import React from 'react';
import styled from 'styled-components';
import TelaDetalhes from './components/TelaDetalhes';
import axios from 'axios'

const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3px;
  border: 1px blue solid;
  border-radius: 10px;
  width: 400px;
  padding: 6px;
  align-items: center;
`

const ContainerDados = styled.div `
  display: flex;
  justify-content: flex-end;
`

export default class App extends React.Component {
  state = {
    users: [],
    erro: "",
    nomeUser: "",
    emailUser: "",
    screen: "inicial"
  }

  componentDidMount() {
    this.getAllUsers()
  }

  getAllUsers = () => {
    axios.
      get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "raquel-burger-alves"
          }
        }
      )
      .then((resposta) => {
        console.table(resposta.data)
        this.setState({ users: resposta.data })

      })
      .catch((erro) => {
        this.setState({ erro: erro.response.data })

      })
  }

  createUser = () => {
    const newUser = {
      name: this.state.nomeUser,
      email: this.state.emailUser
    }
    axios.
      post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        newUser,
        {
          headers: {
            Authorization: "raquel-burger-alves"
          }
        }
      )
      .then((resposta) => {
        resposta.status === 201 && alert("Usuário criado")
        this.getAllUsers()
      })
      .catch((erro) => {
        alert(erro.response.data)
      })
  }

  addNameUser = (event) => {
    this.setState({
      nomeUser: event.target.value,

    })
  }
  addEmailUser = (event) => {
    this.setState({
      emailUser: event.target.value
    })
  }

  changeScreen = (telaEscolhida) => {
    this.setState({ screen: telaEscolhida })
  }

  viewScreen = () => {
    if (this.state.screen === "inicial") {
      return <div>
          <button onClick={() => { this.changeScreen("TelaDetalhes") }}>Troca de Tela</button>
        <ContainerDados>
          <input value={this.state.nomeUser} onChange={this.addNameUser} type='text' placeholder='Nome'></input>
          <input value={this.state.emailUser} onChange={this.addEmailUser} type='text' placeholder='Email'></input>
        </ContainerDados>
        <button onClick={this.createUser}>Criar Usuário</button>
      </div>
    } else {
      return <TelaDetalhes
        users={this.state.users}
        changeScreen={this.changeScreen}
        delete={this.deleteUser} />
    }
  }

  deleteUser = (id) => {
    axios
      .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: "raquel-burger-alves"
          }
        }
      ).then(() => {
        alert('Usuário removido')
        this.getAllUsers()
      }).catch((erro) => {
        alert(erro.response.data)
      })
  }



  render() {
    return (
      <ContainerInputs>
        {this.viewScreen()}
      </ContainerInputs>
    );
  }
}

