import "./CharacterSlider.scss"
import Carousel from "../../../../ShareComponent/Carousel/Carousel"
import { useState, useEffect, memo } from "react"

function CharacterSlider({characterAvatars, onActiveChange}) {
    const [translateSize, setTranslateSize] = useState(140);
    const handleActiveChange = (index) => {
        if (characterAvatars.length > 0) {
            onActiveChange(characterAvatars[index].name);
        }
    }
    useEffect(() => {
        if (characterAvatars.length > 0)
        onActiveChange(characterAvatars[0].name);
    }, [characterAvatars])

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
                    <div key={item.id} className="avatar" onClick={()=>{onActiveChange(item.name)}}>
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
