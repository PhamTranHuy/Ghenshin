import "./AnimateBackground.scss"
import { memo } from "react"
function AnimateBackground({ background }) {
    return (
        <div className="background-wrapper">
            <div className="background bg-1" style={{ backgroundImage: `url(${background[0]})` }}></div>
            <div className="background bg-2"style={{ backgroundImage: `url(${background[1]})` }}></div>
        </div>
    )
}

export default memo(AnimateBackground)
