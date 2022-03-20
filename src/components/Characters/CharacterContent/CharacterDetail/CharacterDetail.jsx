import "./CharacterDetail.scss"
import whiteDiamond from "../../assets/detail/white-diamond.png";
import CustomScrollbar from "../../../../ShareComponent/CustomScrollbar/CustomScrollbar";
import CharacterCv from "./CharacterCv/CharacterCv";
function CharacterDetail({ character }) {
    
    return character && (
        <div className="character-detail" key={character.name}>
            <img className="character-img" src={character.img} alt="" />
            <img className="character-conversation" src={character.conversation_img} alt="" />
            <img className="character-quality" src={character.quality_img} alt="" />
            <div className="character-info">
                <h1 className="name">{character.name}</h1>
                <CharacterCv name={character.cv}/>
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
