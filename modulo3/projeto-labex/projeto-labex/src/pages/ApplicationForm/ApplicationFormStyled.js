import styled from "styled-components";

export const ContainerApplication = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 13rem);
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
    background-color: rgba(30, 235, 165, 0.4);
    border-radius: 10px;
    }

`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 60vw;
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

export const ButtonTrip = styled.button`
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
    margin-top: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;
    :hover {
        border: 1px outset #23150C;
    }
`