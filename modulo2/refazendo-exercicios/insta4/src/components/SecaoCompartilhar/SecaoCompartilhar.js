import React, { Component } from 'react'
import styled from 'styled-components'
import facebook from '../../img/facebook.png'


const ShareContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`
const ShareItems = styled.img`
    width: 24px;
    margin-right: 5px;
`
const ContainerItems = styled.div`
    display: flex;
    justify-content: space-evenly;
`
export default class SecaoCompartilhar extends Component {
    state = {
        share: ''
    }

    onChangeShare = (event) => {
        console.log(event.target.value)
        this.setState({share: event.target.value})
    }

    aoShareInsta = () => {
        console.log('Post compartilhado pelo Instagram')
        this.setState({
            share: ''
        })
    }
    aoShareTwitter = () => {
        console.log('Post compartilhado pelo Twitter')
        this.setState({
            share: ''
        })
    }
    aoShareFace = () => {
        console.log('Post compartilhado pelo Facebook')
        this.setState({
            share: ''
        })
    }
  render() {

    return (

      <ShareContainer>
        <ContainerItems>
            <ShareItems button onClick={this.aoShareFace}><img facebook alt='logo facebook'/> </ShareItems>
        </ContainerItems>
      </ShareContainer>
    )
  }
}
