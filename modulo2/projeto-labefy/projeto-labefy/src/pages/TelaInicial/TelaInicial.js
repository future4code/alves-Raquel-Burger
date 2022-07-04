import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { ContainerInicial, Icones, ContainerExcluir, ContainerPlaylist, ContainerTela, TituloLabefy, Input, TituloPlaylist, Button, ContainerPlaylists } from './styled.js'
import { BsTrash } from 'react-icons/bs'

export default class TelaInicial extends Component {
    state = {
        playlists: [],
        nomePlaylist: ""
    }
    componentDidMount() {
        this.pegaPlaylist()
    }
    pegaPlaylist = () => {
        axios.
            get(`${BASE_URL}`,
                {
                    headers: {
                        Authorization: "raquel-burger-alves"
                    }
                }
            )
            .then((resposta) => {
                this.setState({ playlists: resposta.data.result.list })
            })
            .catch((erro) => {
                console.log(erro.response.data)
            })
    }

    criaPlaylist = () => {
        const novaPlaylist = {
            name: this.state.nomePlaylist
        }
        axios
            .post(
                `${BASE_URL}`,
                novaPlaylist,
                {
                    headers: {
                        Authorization: "raquel-burger-alves"
                    }
                }
            )
            .then(() => {
                alert("Playlist criada com sucesso")
                this.pegaPlaylist()
                this.setState({ nomePlaylist: "" })
            })
            .catch((erro) => {
                console.log(erro.response.data)
            })
    }
    novoNomePlaylist = (event) => {
        this.setState({ nomePlaylist: event.target.value })
    }
    deletaPlaylist = (id) => {
        if (window.confirm("Tem certeza que deseja apagar esta playlist? ")) {
            axios.delete
                (`${BASE_URL}/${id}`,
                    {
                        headers: {
                            Authorization: "raquel-burger-alves"
                        }
                    }
                )
                .then(() => {
                    alert("Playlist excluida com sucesso")
                    this.pegaPlaylist()
                })
                .catch((erro) => {
                    console.log(erro.response)
                })
        }
    }

    render() {
        const listaPlaylist = this.state.playlists.map((playlist) => {
            return (
                <ContainerExcluir>
                    <ContainerPlaylist
                        key={playlist.id}
                        onClick={() => this.props.mudarTelaDetalhes(playlist.id)}>
                        {playlist.name}
                    </ContainerPlaylist>
                    <Icones onClick={() => this.deletaPlaylist(playlist.id)}><BsTrash /></Icones>
                </ContainerExcluir>
            )
        })
        return (

            <ContainerTela>
                <ContainerInicial>
                    <TituloLabefy>
                        LABEFY
                    </TituloLabefy>
                    <Input
                        value={this.state.nomePlaylist}
                        onChange={this.novoNomePlaylist}
                        placeholder="Digite o nome da playlist"
                    />
                    <Button onClick={this.criaPlaylist}>Criar Playlist</Button>
                    <TituloPlaylist>Minhas Playlists</TituloPlaylist>
                    <ContainerPlaylists>
                        {listaPlaylist}
                    </ContainerPlaylists>
                </ContainerInicial>
            </ContainerTela>
        )
    }
}





