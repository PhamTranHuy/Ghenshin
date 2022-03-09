import React from 'react'
import CharacterContent from '../CharacterContent/CharacterContent'
import mondstadt_background_1 from "../assets/background/mondstadt-1.jpg"
import mondstadt_background_2 from "../assets/background/mondstadt-2.jpg"

function Mondstadt() {
    return (
        <CharacterContent background={[mondstadt_background_1, mondstadt_background_2]}/>
    )
}

export default Mondstadt
