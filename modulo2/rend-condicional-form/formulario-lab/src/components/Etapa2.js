import React, { Component } from 'react'
import styled from 'styled-components'

const ContainerEtapa = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`


export default class Etapa2 extends Component {
    render() {

        return (
            <ContainerEtapa>
                <div>
                    <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR </h2>
                </div>
                <div>
                    <p>5. Qual curso?</p>
                    <input type="text" />
                </div>
                <div>
                    <p>6. Qual unidade de ensino?</p>
                    <input type="text" />
                </div>
              
            </ContainerEtapa>
        )
    }
}
