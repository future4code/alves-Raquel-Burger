import axios from 'axios'
import React, { Component } from 'react'
import { BASE_URL } from '../../constants/urls'
import { ContainerTela, Player, ContainerPlayer, ContainerInicial, ContainerTitulo, ContainerInputs, ContainerPlaylist, Input, Button, TituloPlaylist, ContainerPlaylists, Icones } from './styled'
import { GiReturnArrow } from 'react-icons/gi'
import { BsTrash } from 'react-icons/bs'

export default class TelaDetalhes extends Component {
  state = {
    musicas: [],
    titulo: "",
    artista: "",
    url: ""
  }
  componentDidMount() {
    this.mostraPlaylistTrack()
  }
  mostraPlaylistTrack = () => {
    axios.
      get(`${BASE_URL}/${this.props.id}/tracks`,
        {
          headers: {
            Authorization: "raquel-burger-alves"
          }
        }
      )
      .then((resposta) => {
        this.setState({ musicas: resposta.data.result.tracks })
      })
      .catch((erro) => {
        console.log(erro.response.data)
      })
  }
  adicionaTrack = () => {
    const novaMusica = {
      name: this.state.titulo,
      artist: this.state.artista,
      url: this.state.url
    }
    axios.
      post(`${BASE_URL}/${this.props.id}/tracks`,
        novaMusica,
        {
          headers: {
            Authorization: "raquel-burger-alves"
          }
        }
      )
      .then((resposta) => {
        this.mostraPlaylistTrack()
      })
      .catch((erro) => {
        alert(erro.response.data)
      })
  }

  deletaTrack = (id) => {
    axios.
      delete(`${BASE_URL}/${this.props.id}/tracks/${id}`,
        {
          headers: {
            Authorization: "raquel-burger-alves"
          }
        }
      )
      .then(() => {
        alert("Música excluida")
        this.mostraPlaylistTrack()
      })
      .catch((erro) => {
        alert(erro.response.data)
      })
  }
  onChangeArtista = (event) => {
    this.setState({ artista: event.target.value })
  }
  onChangeTitulo = (event) => {
    this.setState({ titulo: event.target.value })
  }
  onChangeUrl = (event) => {
    this.setState({ url: event.target.value })
  }
  render() {
    const listaMusicas = this.state.musicas.map((musica) => {
      return (
        <ContainerPlaylist key={musica.id}>
          <p>{musica.artist}</p>
          <p>{musica.name}</p>
          <Icones onClick={() => this.deletaTrack(musica.id)}><BsTrash /></Icones>
          <ContainerPlayer>
            <Player src={musica.url} controls />
          </ContainerPlayer>
        </ContainerPlaylist>
      )
    })
    return (

      <ContainerTela>
        <ContainerInicial>
          <ContainerTitulo>
            <Icones onClick={this.props.mudarTelaInical}><GiReturnArrow /></Icones>
            <TituloPlaylist>Minhas Músicas</TituloPlaylist>
          </ContainerTitulo>
          <ContainerInputs>
            <Input
              value={this.state.artista}
              onChange={this.onChangeArtista}
              placeholder="Digite o artista"
            ></Input>
            <Input
              value={this.state.titulo}
              onChange={this.onChangeTitulo}
              placeholder="Digite o título"
            ></Input>
            <Input
              value={this.state.url}
              onChange={this.onChangeUrl}
              placeholder="Url MP3"
            ></Input>
          </ContainerInputs>
          <Button onClick={this.adicionaTrack}>Adicionar Música</Button>
          <ContainerPlaylists>
            {listaMusicas}
          </ContainerPlaylists>
        </ContainerInicial>
      </ContainerTela>
    )
  }
}
