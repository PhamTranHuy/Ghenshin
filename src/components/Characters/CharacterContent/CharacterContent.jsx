import "./CharacterContent.scss"
import AnimateBackground from "./AnimateBackground/AnimateBackground"

function CharacterView({ background }) {
    return (
        <div className="character-content-wrapper">
            <AnimateBackground background={background}/>
        </div>
    )
}

export default CharacterView
