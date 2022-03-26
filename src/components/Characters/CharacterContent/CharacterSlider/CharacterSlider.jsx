import "./CharacterSlider.scss"
import Carousel from "../../../../ShareComponent/Carousel/Carousel"
import useWindowSize from "../../../../CustomHook/WindowSize"
import { useState, useEffect, useRef, memo } from "react"
import ImgLoaderPlaceholder from "../../../../ShareComponent/ImgLoaderPlaceholder/ImgLoaderPlaceholder";

function CharacterSlider({characterAvatars, onActiveChange}) {
    const windowSize = useWindowSize();
    const [ translateSize, setTranslateSize ] = useState(140);
    const [ carouselWidth, setCarouselWidth ] = useState(0);
    const [ activeIndex, setActiveIndex ] = useState(0);
    const numberItemOnViewRef = useRef(6);
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
        if (windowSize.width <= 1200) {
            numberItemOnViewRef.current = 5;
        } else {
            numberItemOnViewRef.current = 6;
        }
        const timer = setTimeout(() => {
            const avatarElem = document.querySelector('.avatar');
            if (avatarElem) {
                const style = getComputedStyle(avatarElem);
                const avatarWidth = avatarElem.offsetWidth + parseInt(style.marginLeft) + parseInt(style.marginRight);
                setTranslateSize(avatarWidth);
                setCarouselWidth(avatarWidth * numberItemOnViewRef.current);
            }
        });
        return () => {
            clearTimeout(timer);
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
                    initialIndex={activeIndex}
            >
                {characterAvatars.map((item, index) => (
                    <div key={item.id} className="avatar"
                        onClick={() => {setActiveIndex(index)}}>
                        <div className="img-wrapper">
                            <ImgLoaderPlaceholder className="avatar-img" src={item.img} alt="" />
                        </div>
                        <p className="name">{item.name}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default memo(CharacterSlider)
