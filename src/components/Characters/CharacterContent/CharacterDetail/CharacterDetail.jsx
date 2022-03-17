import "./CharacterDetail.scss"
import blackDiamond from "../../assets/detail/black-diamond.jpg";
import whiteDiamond from "../../assets/detail/white-diamond.png";
import { CHARACTER_DETAIL_LIST } from "../../assets/data"
import CustomScrollbar from "../../../../ShareComponent/CustomScrollbar/CustomScrollbar";

function CharacterDetail() {
    return (
        <div className="character-detail">
            <img className="character-img" src={CHARACTER_DETAIL_LIST[0].img} alt="" />
            <img className="character-conversation" src={CHARACTER_DETAIL_LIST[0].conversation_img} alt="" />
            <img className="character-quality" src={CHARACTER_DETAIL_LIST[0].quality_img} alt="" />
            <div className="character-info">
                <h1 className="name">{CHARACTER_DETAIL_LIST[0].name}</h1>
                <div className="cv">
                    <img src={blackDiamond} alt="" />
                    <p>CV: {CHARACTER_DETAIL_LIST[0].cv}</p>
                </div>

                <div className="intro-content">
                    <img src={whiteDiamond} alt="" />
                    <CustomScrollbar>
                        <p>{`${CHARACTER_DETAIL_LIST[0].intro}`}</p>
                    </CustomScrollbar>
                </div>
            </div>
        </div>
    )
}

export default CharacterDetail
