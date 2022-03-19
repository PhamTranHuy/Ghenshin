import { useState, useEffect } from 'react'
import CharacterContent from '../CharacterContent/CharacterContent'
import inazuma_background_1 from "../assets/background/inazuma-1.jpg"
import inazuma_background_2 from "../assets/background/inazuma-2.jpg"
import * as CharacterApi from "../assets/fake-api";

function Inazuma() {
    const [characterAvatars, setCharacterAvatars] = useState([]);
    useEffect(() => {
        CharacterApi.getAvatars('inazuma').then((data) => {
            setCharacterAvatars(data);
        })
    }, [])

    return (
        <div className="character-page_inazuma" style={{width: '100%', height: '100%'}}>
            <CharacterContent background={[inazuma_background_1, inazuma_background_2]} characterAvatars={characterAvatars}/>
        </div>
    )
}

export default Inazuma
