import React from 'react'
import CharacterContent from '../CharacterContent/CharacterContent'
import liyue_background_1 from "../assets/background/liyue-1.jpg"
import liyue_background_2 from "../assets/background/liyue-2.jpg"

function Liyue() {
    return (
        <CharacterContent background={[liyue_background_1, liyue_background_2]} />
    )
}

export default Liyue

