import "./CharacterDetail.scss"
import whiteDiamond from "../../assets/detail/white-diamond.png";
import CustomScrollbar from "../../../../ShareComponent/CustomScrollbar/CustomScrollbar";
import CharacterCv from "./CharacterCv/CharacterCv";
import useWindowSize from "../../../../CustomHook/WindowSize"
import { useState, useEffect } from "react";
import ImgLoaderPlaceholder from "../../../../ShareComponent/ImgLoaderPlaceholder/ImgLoaderPlaceholder";

function CharacterDetail({ character }) {
    const windowSize = useWindowSize();
    const [ mobileView, setMobileView ] = useState(false);
    useEffect(() => {
        if (windowSize.width <= 1200) {
            setMobileView(true);
        } else {
            setMobileView(false);
        }
    }, [windowSize])
    return character && (
        <div className="character-detail" key={character.name}>
            {
                !mobileView ? 
                <ImgLoaderPlaceholder className="character-img desktop" src={character.img} alt="" /> : 
                <ImgLoaderPlaceholder className="character-img mobile" src={character.mobile_img} alt="" />
            }
            <ImgLoaderPlaceholder className="character-conversation" src={character.conversation_img} alt="" />
            <ImgLoaderPlaceholder className="character-quality" src={character.quality_img} alt="" />
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
