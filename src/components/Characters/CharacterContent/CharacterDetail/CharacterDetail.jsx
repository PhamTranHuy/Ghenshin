import "./CharacterDetail.scss"
import blackDiamond from "../../assets/detail/black-diamond.jpg";
import whiteDiamond from "../../assets/detail/white-diamond.png";
import CustomScrollbar from "../../../../ShareComponent/CustomScrollbar/CustomScrollbar";

function CharacterDetail({ character }) {
    return character && (
        <div className="character-detail">
            <img className="character-img" src={character.img} alt="" />
            <img className="character-conversation" src={character.conversation_img} alt="" />
            <img className="character-quality" src={character.quality_img} alt="" />
            <div className="character-info">
                <h1 className="name">{character.name}</h1>
                <div className="cv">
                    <img src={blackDiamond} alt="" />
                    <p>CV: {character.cv}</p>
                </div>

                <div className="intro-content">
                    <img src={whiteDiamond} alt="" />
                    <CustomScrollbar>
                        <p>{`${character.intro}`}</p>
                    </CustomScrollbar>
                </div>
            </div>
        </div>
    )
}

export default CharacterDetail
