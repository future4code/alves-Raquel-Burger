import React from 'react';
import styled from 'styled-components';
import {DivBigCard, ImgBigCard} from '../styled'


function CardGrande(props) {
    return (
        <DivBigCard>
            <ImgBigCard src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </DivBigCard>
    )
}

export default CardGrande;