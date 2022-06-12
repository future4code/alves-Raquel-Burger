import React, { Component } from 'react'
import styled from 'styled-components'
import { AiOutlineSend } from 'react-icons/ai'

const ContainerTela = styled.div`
    max-width: 600px;
    height: 100vh;
    border: 1px solid #000000;
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    background-color: aquamarine;
`
const ContainerFooter = styled.div`
    display: flex;
    height: 60px;
    width: 100%;
    background-color: #cec8c8;
    align-items: center;
`
const InputUsuario = styled.input`
    border-radius: 10px;
    height: 30px;
    margin-right: 5px;
    margin-left: 5px;

`
const InputMensagem = styled.input`
    border-radius: 10px;
    width: 70%;
    height: 30px;
`

const BotaoEnviar = styled.button`
    text-decoration: none;
    border: 0;
    width: 10%;
    font-size: 150%;
    background-color: #cec8c8;
    display: flex;
    text-align: center;
    justify-content: center;

`
const ContainerMensagens = styled.div`
  
`


export default class EnviaMensagem extends Component {
    state = {
        mensagem: [
            {
                usuario: '',
                mensagem: '',
            },
        ],
        inputUsuario: '',
        inputMensagem: ''

    }

    enviaNovaMensagem = () => {
        const novaMensagem = {
            usuario: this.state.inputUsuario,
            mensagem: this.state.inputMensagem
        }
        const mensagensEnviadas = [...this.state.mensagem, novaMensagem]

        this.setState({
            mensagem: mensagensEnviadas,
            inputUsuario: '',
            inputMensagem: ''
        })

    }

    onChangeInputUsuario = (event) => {
        this.setState({
            inputUsuario: event.target.value
        })
    }

    onChangeInputMensagem = (event) => {
        this.setState({
            inputMensagem: event.target.value
        })
    }

    render() {

        const todasMensagens = this.state.mensagem.map((mensagem, index) => {
            return <div key={index}>
                <h4>{mensagem.usuario}</h4>
                <p>{mensagem.mensagem}</p>
            </div>



        })

        return (
            <ContainerTela>
                <ContainerMensagens>
                    {todasMensagens}
                </ContainerMensagens>

                <ContainerFooter>
                    <InputUsuario placeholder='Usuário' value={this.state.inputUsuario} onChange={this.onChangeInputUsuario} />
                    <InputMensagem placeholder='Mensagem' value={this.state.inputMensagem} onChange={this.onChangeInputMensagem} />
                    <BotaoEnviar onClick={this.enviaNovaMensagem}><AiOutlineSend /></BotaoEnviar>
                </ContainerFooter>
            </ContainerTela>
        )
    }

}