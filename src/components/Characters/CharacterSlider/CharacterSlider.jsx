import "./CharacterSlider.scss"
import Carousel from "../../../ShareComponent/Carousel/Carousel"
import { CHARACTER_IMG_LIST } from "../assets/data"

function CharacterSlider() {
    return (
        <div className="character-slider-wrapper">
            <Carousel width={830} translateSize={180} infinite={false} paginationButton={false}>
                {CHARACTER_IMG_LIST.map(item => (
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
