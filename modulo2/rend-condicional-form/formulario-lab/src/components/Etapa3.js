import React, { Component } from 'react'
import styled from 'styled-components'

const ContainerEtapa = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

export default class Etapa3 extends Component {
    render() {

        return (
            <ContainerEtapa>
                <div>
                    <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO </h2>
                </div>
                <div>
                    <p>5. Por que você não terminou um curso de graduação?</p>
                    <input type="text" />
                </div>
                <div>
                    <p>6. Você fez algum curso complementar?</p>
                    <select name="curso" id="curso">
                        <option value="nenhum">Nenhum</option>
                        <option value="tecnico">Curso técnico</option>
                        <option value="ingles">Curso de inglês</option>
                    </select>
                </div>

            </ContainerEtapa>
        )
    }
}
