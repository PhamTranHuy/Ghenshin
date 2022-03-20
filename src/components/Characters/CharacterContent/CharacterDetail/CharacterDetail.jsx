import "./CharacterDetail.scss"
import blackDiamond from "../../assets/detail/black-diamond.jpg";
import whiteDiamond from "../../assets/detail/white-diamond.png";
import CustomScrollbar from "../../../../ShareComponent/CustomScrollbar/CustomScrollbar";
import { useRef, useState, useEffect } from "react";

function CharacterDetail({ character }) {
    const cvNameViewRef = useRef(null);
    const cvNameRef = useRef(null);
    const [rowUpAnimate, setRowUpAnimate] = useState(false);
    const [leftPositionToRowUp, setLeftPositionToRowUp] = useState(0);
    const rowUpKeyFrames = `@keyframes row-up {
        from {
            left: 0;
        }
        to {
            left: -${leftPositionToRowUp}px;
        }
    }`
    const rowUpAnimateStyle = {
        position: 'relative', 
        animation: `row-up 8s 2s linear infinite normal`
    }
    const getLeftPositionToRowUp = (nameElem) => {
        const elemStyle = getComputedStyle(nameElem);
        const leftPosition = nameElem.offsetWidth + parseInt(elemStyle.marginRight);
        return leftPosition;
    }
    useEffect(() => {
        if (cvNameViewRef.current && cvNameRef.current) {
            if (cvNameViewRef.current.offsetWidth < cvNameRef.current.offsetWidth) {
                setRowUpAnimate(true);
                setLeftPositionToRowUp(getLeftPositionToRowUp(cvNameRef.current));
            } else {
                setRowUpAnimate(false);
            }
        }
    }, [character])
    return character && (
        <div className="character-detail" key={character.name}>
            <img className="character-img" src={character.img} alt="" />
            <img className="character-conversation" src={character.conversation_img} alt="" />
            <img className="character-quality" src={character.quality_img} alt="" />
            <div className="character-info">
                <h1 className="name">{character.name}</h1>
                <div className="cv">
                    <img src={blackDiamond} alt="" />
                    <div className="cv-name-container" ref={cvNameViewRef}>
                        <style>{rowUpKeyFrames}</style>
                        <div className="cv-name-wrapper" style={rowUpAnimate ? rowUpAnimateStyle : {}}>
                            <p ref={cvNameRef}>CV: {character.cv}</p>
                            <p style={{display: rowUpAnimate ? 'block' : 'none'}}>CV: {character.cv}</p>
                        </div>
                    </div>
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
