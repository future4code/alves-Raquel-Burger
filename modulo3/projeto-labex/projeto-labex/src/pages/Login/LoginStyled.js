import styled from "styled-components";
export const ContainerLogin = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 13rem);

`
export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    width: 30vw;
    box-shadow: rgba(30, 235, 165, 0.15) 0px 15px 25px, rgba(30, 235, 165, 0.05) 0px 5px 10px;
    border: 1px #897042 inset;
    padding: 0.5rem;
    background-color: #E7E2CE;
    input, select, textarea{
        font-size: 16px;
        margin: 0.2rem;
        border: #897042 1px outset;
    }
`

export const ButtonLogin = styled.button`
    font-family: 'Chakra Petch', sans-serif;
    color: #EAA806;
    position: relative;
    border: 1px outset #1EEBA5;
    font-size: 0.7rem;
    background-color: white;
    width: 10rem;
    padding: 0.5rem;
    transition: all 1ms ease-in-out;
    font-family: 'Press Start 2P', cursive;
    align-self: center;
    margin: 1rem;
    cursor: pointer;
    :hover {
        border: 1px outset #23150C;
    }
`