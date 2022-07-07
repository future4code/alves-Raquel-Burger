import React, { useState, useEffect } from "react";
import { Button, HeaderAstro, Titulo } from "./Styled";
import Matches from "../assets/matches.png"
import Home from "../assets/home.png"

function Header({ changeScreenMatches, changeScreenHome, currentScreen }) {
    const [textButton, setTextButton] = useState("Home")

    useEffect(() => {
        if (currentScreen === "home") {
            return (
                setTextButton(<img src = {Matches} height='40px' width='40px'/>)
            )
        } else {
            return (
                setTextButton(<img src = {Home} height='40px' width='40px'/>)
            )
        }
    }, [ currentScreen])

    const onClickButton = () => {
        if (currentScreen === "home") {
            return changeScreenMatches
        } else {
            return changeScreenHome
        }
    }

    return (
        <HeaderAstro>
            <Titulo>Astromatch</Titulo>
            <Button type="button" onClick={onClickButton()}>{textButton}</Button>
        </HeaderAstro>
    )
}

export default Header