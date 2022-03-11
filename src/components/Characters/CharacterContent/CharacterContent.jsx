import "./CharacterContent.scss"
import AnimateBackground from "./AnimateBackground/AnimateBackground"
import CharacterSlider from "../CharacterSlider/CharacterSlider"

function CharacterView({ background }) {
    return (
        <div className="character-content-wrapper">
            <AnimateBackground background={background}/>
            <CharacterSlider />
        </div>
    )
}

export default CharacterView
