import React, { Component } from 'react'
import TelaInicial from './pages/TelaInicial/TelaInicial'
import TelaDetalhes from './pages/TelaDetalhes/TelaDetalhes'


export default class App extends Component {
  state = {
    telaAtual: "inicial",
    playlistEscolhida: ""
  }

  mudarTelaDetalhes = (id) => {
    this.setState({ telaAtual: "detalhes", playlistEscolhida: id })
  }

  mudarTelaInical = () => {
    this.setState({ telaAtual: "inicial", playlistEscolhida: "" })
  }

  selecionaTela = () => {
    switch (this.state.telaAtual) {
      case "inicial":
        return <TelaInicial mudarTelaDetalhes={this.mudarTelaDetalhes} />
      case "detalhes":
        return <TelaDetalhes mudarTelaInical={this.mudarTelaInical} id={this.state.playlistEscolhida} />
      default:
        return <TelaInicial mudarTelaDetalhes={this.mudarTelaDetalhes} />
    }
  }
  render() {
    return (
      <div>
        {this.selecionaTela()}

      </div>
    )
  }
}

