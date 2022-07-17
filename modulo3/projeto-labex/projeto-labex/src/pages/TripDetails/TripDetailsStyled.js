import styled from "styled-components";

export const ContainerAdminDetails = styled.section`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    height: calc(100vh - 13em);
    align-items: center;
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
export const ContainerAdminTripDetail = styled.section`
     display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    /* width: 24rem;
    height: 19rem; */
    box-shadow: rgba(30, 235, 165, 0.15) 0px 15px 25px, rgba(30, 235, 165, 0.05) 0px 5px 10px;
    background-color: #E7E2CE;
    margin: 1rem;
    padding: 0.2rem;
`

export const ButtonAdminDetail = styled.button`
    font-family: 'Chakra Petch', sans-serif;
    color: #EAA806;
    position: relative;
    border: 1px outset #1EEBA5;
    font-size: 0.7rem;
    background-color: white;
    width: 6.5rem;
    padding: 0.5rem;
    transition: all 1ms ease-in-out;
    font-family: 'Press Start 2P', cursive;
    align-self: center;
    cursor: pointer;
    :hover {
        border: 1px outset #23150C;
    }
`