import "./CharacterContent.scss"
import AnimateBackground from "./AnimateBackground/AnimateBackground"
import CharacterSlider from "./CharacterSlider/CharacterSlider"
import CharacterDetail from "./CharacterDetail/CharacterDetail"

function CharacterView({ background, characterAvatars}) {
    return (
        <div className="character-content-wrapper">
            <AnimateBackground background={background}/>
            <CharacterSlider characterAvatars={characterAvatars} />
            <CharacterDetail />
        </div>
    )
}

export default CharacterView
