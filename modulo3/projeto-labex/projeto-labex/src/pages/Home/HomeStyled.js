import styled from "styled-components";

export const ContainerHome = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: calc(100vh - 13rem);
    font-size: 2rem;
    
`
export const ContainerButton = styled.section`
    display: flex;
    justify-content: space-around;
    width: 50%;

`

export const Button = styled.button`
    font-family: 'Chakra Petch', sans-serif;
    color: #EAA806;
    position: relative;
    border: 1px outset #1EEBA5;
    font-size: 1rem;
    background-color: transparent;
    width: 10rem;
    padding: 0.5rem;
    transition: all 1ms ease-in-out;
    font-family: 'Press Start 2P', cursive;
    cursor: pointer;
    :hover {
        border: 1px outset #23150C;
    }
`