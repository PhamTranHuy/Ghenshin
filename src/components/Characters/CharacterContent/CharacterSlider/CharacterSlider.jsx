import "./CharacterSlider.scss"
import Carousel from "../../../../ShareComponent/Carousel/Carousel"
import { useState, useEffect, useRef, memo } from "react"

function CharacterSlider({characterAvatars, onActiveChange}) {
    const avatarRef = useRef([])
    const [translateSize, setTranslateSize] = useState(null);
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
        }
    }, [])

    return (
        <div className="character-slider-wrapper">
            <Carousel width={830} 
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
