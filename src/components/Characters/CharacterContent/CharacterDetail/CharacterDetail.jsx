import "./CharacterDetail.scss"
import { CHARACTER_DETAIL_LIST } from "../../assets/data"

function CharacterDetail() {
    return (
        <div className="character-detail">
            <img className="character-img" src={CHARACTER_DETAIL_LIST[0].img} alt="" />
            <img className="character-conversation" src={CHARACTER_DETAIL_LIST[0].conversation_img} alt="" />
            <img className="character-quality" src={CHARACTER_DETAIL_LIST[0].quality_img} alt="" />
            <div className="character-info">
                <h1 className="name">name</h1>
                <div className="cv"></div>
                <div className="intro-content"></div>
            </div>
        </div>
    )
}

export default CharacterDetail
