import { useState, useEffect } from 'react'
import CharacterContent from '../CharacterContent/CharacterContent'
import mondstadt_background_1 from "../assets/background/mondstadt-1.jpg"
import mondstadt_background_2 from "../assets/background/mondstadt-2.jpg"
import * as CharacterApi from "../assets/fake-api";

function Mondstadt() {
    const [characterAvatars, setCharacterAvatars] = useState([]);
    useEffect(() => {
        CharacterApi.getAvatars('mondstadt').then((data) => {
            setCharacterAvatars(data);
        })
    }, [])
    return (
        <CharacterContent background={[mondstadt_background_1, mondstadt_background_2]} characterAvatars={characterAvatars} />
    )
}

export default Mondstadt
