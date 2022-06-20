import React, { Component } from 'react'
import styled from 'styled-components'

const ContainerEtapa = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

export default class Final extends Component {
  render() {
    return (
        <ContainerEtapa>
            <div>
                <h2>O FORMULÁRIO ACABOU </h2>
            </div>
            <div>
                <p>Muito obrigada por participar!</p>
                <p>Entraremos em contato!</p>
            </div>
        </ContainerEtapa>
    )
  }
}
