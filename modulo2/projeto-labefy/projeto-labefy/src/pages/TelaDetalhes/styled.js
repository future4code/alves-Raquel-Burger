import styled from "styled-components";

export const ContainerTela = styled.div`
    align-items: center;
    max-width: 400px;
    font-family: 'Cantarell';
`
export const ContainerInicial = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 600px;
    padding: 10px;
    border: 0.5px #fe7e02 solid;
    background-color: rgba(254, 126, 2, 0.7);
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`
export const Input = styled.input`
    width: 50%;
    padding: 5px;
    border-radius: 5px;
    &:focus{
        outline: none;
        box-shadow: 0px 0px 2px red;  
    } 
    `
export const Button = styled.button`
    background-color: #0088B3;
    border: 2px solid #03C4FF;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
    padding: 8px;
    cursor: pointer;
    &:hover {
    font-size: large;
    background-color: #fe7e02;
    }

`
export const ContainerTitulo = styled.div`
        display: flex;
        width: 90%;
        align-items: center;
    `
export const ContainerInputs = styled.div`
        display: flex;
    `
export const TituloPlaylist = styled.div`
    color: #323b3f;
    font-size: 1.5rem;
    font-weight: bolder;
    padding: 2px;
    margin-left: 20%;
    `
export const ContainerPlaylist = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    border: 2px #03C4FF solid;
    background-color: rgba(0, 136, 179, 0.8);
    border-radius: 5px;
    width: 95%;
    height: 20%;
    margin-top: 2%;
    padding: 1%;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
`
export const ContainerPlaylists = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    max-width: 100%;
    height: 80%;
    color: #323b3f;
`
export const ContainerPlayer = styled.div`
    height: 80%;
    
`
export const Player = styled.audio`
    padding-top: 3%;
    max-width: 95%;
    height: 25%;
`
export const Icones = styled.div`
    font-size: 150%;
    cursor: pointer;
    color: #323b3f;
    &:hover {
        transform: rotate(-15deg);
    }
`
