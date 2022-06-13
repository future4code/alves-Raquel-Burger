import React, { Component } from 'react'
import styled from 'styled-components'

const ContainerEtapa = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`
const DivButton = styled.div`
    margin-top: 20px;
`

export default class Etapa1 extends Component {
    render() {

        return (
            <ContainerEtapa>
                <div>
                    <h2>ETAPA 1 - DADOS GERAIS </h2>
                </div>
                <div>
                    <p>1. Qual o seu nome?</p>
                    <input type="text" />
                </div>
                <div>
                    <p>2. Qual o sua idade?</p>
                    <input type="number" />
                </div>
                <div>
                    <p>3. Qual o seu email?</p>
                    <input type="email" />
                </div>
                <div>
                    <p>4. Qual a sua escolaridade?</p>
                    <select name="escolaridade" id="escolaridade">
                        <option value="medioIncomp">Ensino médio incompleto</option>
                        <option value="medioComp">Ensino médio completo</option>
                        <option value="supIncomp">Ensino superior incompleto</option>
                        <option value="supComp">Ensino superior completo</option>
                    </select>
                </div>
            </ContainerEtapa>
        )
    }
}
