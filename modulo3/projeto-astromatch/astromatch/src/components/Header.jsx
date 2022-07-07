import React, { useState, useEffect } from "react";
import { Button, HeaderAstro } from "./Styled";

function Header({ changeScreenMatches, changeScreenHome, currentScreen }) {
    const [textButton, setTextButton] = useState("Home")

    useEffect(() => {
        if (currentScreen === "home") {
            return (
                setTextButton("Matches")
            )
        } else {
            return (
                setTextButton("Home")
            )
        }
    }, [textButton, currentScreen])

    const onClickButton = () => {
        if (currentScreen === "home") {
            return changeScreenMatches
        } else {
            return changeScreenHome
        }
    }

    return (
        <HeaderAstro>
            <h1>Astromatch</h1>
            <Button onClick={onClickButton()}>{textButton}</Button>
        </HeaderAstro>
    )
}

export default Header