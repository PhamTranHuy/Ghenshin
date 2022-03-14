import { useState, useEffect } from 'react'
import CharacterContent from '../CharacterContent/CharacterContent'
import liyue_background_1 from "../assets/background/liyue-1.jpg"
import liyue_background_2 from "../assets/background/liyue-2.jpg"
import * as CharacterApi from "../assets/fake-api"

function Liyue() {
    const [characterAvatars, setCharacterAvatars] = useState([]);
    useEffect(() => {
        CharacterApi.getAvatars('liyue').then((data) => {
            setCharacterAvatars(data);
        })
    }, [])
    return (
        <CharacterContent background={[liyue_background_1, liyue_background_2]} characterAvatars={characterAvatars}/>
    )
}

export default Liyue

