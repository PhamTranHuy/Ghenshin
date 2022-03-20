import { useRef, useState, useEffect } from "react";
import blackDiamond from "../../../assets/detail/black-diamond.jpg";
import "./CharacterCv.scss"

function CharacterCv({name}) {
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
    }, [])
    return (
        <div className="cv">
            <img src={blackDiamond} alt="" />
            <div className="cv-name-container" ref={cvNameViewRef}>
                <style>{rowUpKeyFrames}</style>
                <div className="cv-name-wrapper" style={rowUpAnimate ? rowUpAnimateStyle : {}}>
                    <p ref={cvNameRef}>CV: {name}</p>
                    <p style={{display: rowUpAnimate ? 'block' : 'none'}}>CV: {name}</p>
                </div>
            </div>
        </div>
    )
}

export default CharacterCv