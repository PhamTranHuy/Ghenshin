import React from 'react'
import CharacterContent from '../CharacterContent/CharacterContent'
import inazuma_background_1 from "../assets/background/inazuma-1.jpg"
import inazuma_background_2 from "../assets/background/inazuma-2.jpg"

function Inazuma() {
    return (
        <CharacterContent background={[inazuma_background_1, inazuma_background_2]} />
    )
}

export default Inazuma
