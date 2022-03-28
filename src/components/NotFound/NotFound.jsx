import star_icon from './assets/star-icon.png'
import error_img from './assets/404.png'
import animal_img from './assets/animal.png'
import './NotFound.scss'
import { NavLink } from 'react-router-dom'

function NotFound() {
    return (
        <div className="not-found-page">
            <div className="not-found-container">
                <div className="not-found-content">
                    <img src={error_img} className="error-img" />
                    <div className="text">
                        <h2>This page cannot be found</h2>
                        <p>Perhaps it flew away with Venti.</p>
                        <p>Perhaps it rose up to Celestia...</p>
                        <p>Perhaps it went somewhere far away...</p>
                        <img src={star_icon} alt="" className="star-img" />
                        <NavLink to="/home" className="back-to-home"><h2>Back to HOME</h2></NavLink>
                    </div>
                    <img src={animal_img} className="animal-img" />
                </div>
            </div>
        </div>
    )
}

export default NotFound
