import "./CharacterSlider.scss"
import Carousel from "../../../../ShareComponent/Carousel/Carousel"
import useWindowSize from "../../../../CustomHook/WindowSize"
import { useState, useEffect, useRef, memo } from "react"

function CharacterSlider({characterAvatars, onActiveChange}) {
    const avatarRef = useRef([])
    const windowSize = useWindowSize();
    const [translateSize, setTranslateSize] = useState(null);
    const [carouselWidth, setCarouselWidth] = useState(840);
    const handleActiveChange = (index) => {
        if (characterAvatars.length > 0) {
            onActiveChange(characterAvatars[index].name);
        }
    }
    useEffect(() => {
        if (characterAvatars.length > 0)
        onActiveChange(characterAvatars[0].name);
    }, [characterAvatars])

    useEffect(() => {
        if (avatarRef.current.length) {
            const avatarElem = avatarRef.current[0];
            const style = getComputedStyle(avatarElem);
            const avatarWidth = avatarElem.offsetWidth + parseInt(style.marginLeft) + parseInt(style.marginRight);
            setTranslateSize(avatarWidth);
            setCarouselWidth(avatarWidth*6);
        }
    }, [windowSize])

    return (
        <div className="character-slider-wrapper">
            <Carousel width={carouselWidth} 
                    translateSize={translateSize} 
                    infinite={false} 
                    paginationButton={false} 
                    slidesPerView={3} 
                    dragAble={false}
                    onActiveChange={handleActiveChange}
            >
                {characterAvatars.map((item) => (
                    <div key={item.id} className="avatar" ref={(ref) => {avatarRef.current.push(ref)}}>
                        <div className="img-wrapper">
                            <img src={item.img} alt="" />
                        </div>
                        <p className="name">{item.name}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default memo(CharacterSlider)
