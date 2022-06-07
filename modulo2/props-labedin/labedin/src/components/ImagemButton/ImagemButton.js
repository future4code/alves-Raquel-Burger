import React from 'react';
import styled from 'styled-components';
import {BordaButton, ImgButton} from '../styled'

function ImagemButton(props) {
    return (
        <BordaButton>
            <ImgButton src={ props.imagem }/>
            <p>{ props.texto }</p>
        </BordaButton>

    )
}

export default ImagemButton;