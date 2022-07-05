import React, { useState, useEffect } from "react";

function Header({ changeScreenMatches, changeScreenHome, currentScreen }) {
    const [textButton, setTextButton] = useState("Home")

    useEffect(() => {
        if (currentScreen === "home") {
            return (
                setTextButton("Matched")
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
        <div>
            <button onClick={onClickButton()}>{textButton}</button>
        </div>
    )
}

export default Header