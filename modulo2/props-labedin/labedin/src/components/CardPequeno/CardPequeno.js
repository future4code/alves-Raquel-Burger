import React from 'react';
import styled from 'styled-components';
import { DivSmallCard, ImgSmallCars } from '../styled';


function CardPequeno(props) {
    return (
        <DivSmallCard>
            
            <ImgSmallCars src={ props.imagem } />
            <h4>{ props.nome }</h4>
            <p>{ props.descricao }</p>
            
        </DivSmallCard>
    )
}

export default CardPequeno;