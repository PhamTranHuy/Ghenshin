import "./CharacterContent.scss"
import AnimateBackground from "./AnimateBackground/AnimateBackground"
import CharacterSlider from "./CharacterSlider/CharacterSlider"
import CharacterDetail from "./CharacterDetail/CharacterDetail"
import * as CharactersApi from "../assets/fake-api";
import { useState } from "react";

function CharacterView({ background, characterAvatars}) {
    const [characterDetail, setCharacterDetail] = useState(null);
    const handleItemClick = (name) => {
        console.log(`clicked: ${name}`);
        CharactersApi.getDetail(name).then((detail) => {
            console.log(detail);
            setCharacterDetail(detail);
        })
    }
    return (
        <div className="character-content-wrapper">
            <AnimateBackground background={background}/>
            <CharacterSlider characterAvatars={characterAvatars} onItemClick={handleItemClick}/>
            <CharacterDetail character={characterDetail} />
        </div>
    )
}

export default CharacterView
