import './Footer.scss';
import miHoYo_logo from './assets/miHoYo-logo.png'
import genshin_logo from './assets/genshin-logo.png'
import europe from './assets/europe.png'
import us_canada from './assets/us-canada.png'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="social-wrapper">
                    <a href="" className="social-button">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="" className="social-button">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="" className="social-button">
                        <i className="fab fa-youtube"></i>
                    </a>
                    <a href="" className="social-button">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="" className="social-button">
                        <i className="fab fa-discord"></i>
                    </a>
                    <a href="" className="social-button">
                        <i className="fab fa-reddit-alien"></i>
                    </a>
                    <a href="" className="social-button">
                        <i className="fas fa-dragon"></i>
                    </a>
                </div>
                <div className="languages disable-button">
                    <i className="fas fa-globe-asia"></i>
                    <p className="language">English</p>
                    <div className="arrow"></div>
                </div>
            </div>
            <div className="footer-info">
                <div className="logo-wrapper">
                    <img src={miHoYo_logo} alt="" />
                    <img src={genshin_logo} alt="" />
                </div>
                <div className="content-wrapper">
                    <div className="links">
                        <a href="" className="link">Privacy Policy</a>
                        <a href="" className="link">Terms of Service</a>
                        <a href="" className="link">About Us</a>
                        <a href="" className="link">Contact Us</a>
                    </div>
                    <div className="copyright">
                        Copyright © 2020 miHoYo All Rights Reserved
                    </div>
                    <div className="extra-info">
                        "PlayStation Family Mark," "PS5 logo" and "PS4 logo" are registered trademarks or trademarks of Sony Interactive Entertainment Inc.
                    </div>
                    <div className="content">
                        Epic, Epic Games, Epic Games Store, the Epic Games Store logo, and Epic Online Services are trademarks and/or registered trademarks of Epic Games. 
                        All other trademarks are the property of their respective owners.
                    </div>
                    <div className="logos">
                        <img src={europe} alt="" />
                        <img src={us_canada} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
