import PropTypes from 'prop-types'
import './City.scss'

function City({name, background, character, disable}) {
    return (
        <div className="home_city-container" style={disable ? {pointerEvents: 'none'} : {}}>
            <div className="city-background" style={{background: `url(${background}) center no-repeat`}}></div>
            <div className="city-name" style={disable ? {color: 'rgba(255,255,255,0.3)', background: 'rgba(0,0,0,0.3)'} : {}}>
                <p className="name">{name}</p>
            </div>
            <div className="city-character" style={{backgroundImage: `url(${character})`}}></div>
        </div>
    )
}

City.propTypes = {
    name: PropTypes.string,
    background: PropTypes.string,
    character: PropTypes.string,
    disable: PropTypes.bool
}

export default City


