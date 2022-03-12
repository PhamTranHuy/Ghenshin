import "./CharacterSlider.scss"
import Carousel from "../../../ShareComponent/Carousel/Carousel"
import { useState} from "react"

function CharacterSlider({characterAvatars = []}) {
    const [translateSize, setTranslateSize] = useState(140);
    return (
        <div className="character-slider-wrapper">
            <Carousel width={830} translateSize={translateSize} infinite={false} paginationButton={false} slidesPerView={3}>
                {characterAvatars.map((item) => (
                    <div key={item.id} className="avatar">
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

export default CharacterSlider
