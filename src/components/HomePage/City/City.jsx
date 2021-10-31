import PropTypes from 'prop-types'
import './City.scss'

function City({name, background, character}) {
    return (
        <div className="home_city-container">
            <div className="city-background" style={{background: `url(${background}) center no-repeat`}}></div>
            <div className="city-name">
                <p className="name">{name}</p>
            </div>
            <div className="city-character" style={{backgroundImage: `url(${character})`}}></div>
        </div>
    )
}

City.propTypes = {
    name: PropTypes.string,
    background: PropTypes.symbol,
    character: PropTypes.symbol
}

export default City


