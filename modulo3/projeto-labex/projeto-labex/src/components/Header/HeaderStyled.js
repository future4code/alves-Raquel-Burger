import styled from "styled-components";
import Title from '../../assets/title.png'

export const ContainerHeader = styled.section`
    display: flex;
    justify-content: space-between;
    background-image: url(${Title}) ;
    height: 7rem;
    background-size: 70%;
    background-position: center;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
`

export const ButtonHeader = styled.button`
    color: #1EEBA5;
    position: relative;
    border: 1px outset #1EEBA5;
    font-size: 1rem;
    background-color: transparent;
    margin-left: 0.5rem;
    width: 8rem;
    padding: 0.5rem;
    transition: all 1ms ease-in-out;
    font-family: 'Press Start 2P', cursive;
    cursor: pointer;
    :hover {
        color: #EAA806;
    }
   
`