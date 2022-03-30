import './Footer.scss';
import miHoYo_logo from './assets/miHoYo-logo.png'
import genshin_logo from './assets/genshin-logo.png'
import europe from './assets/europe.png'
import us_canada from './assets/us-canada.png'
import HOME_DATA from '../HomePage/data';

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="social-wrapper">
                    {HOME_DATA.SOCIALS.map((social, index) => (
                        <a key={index} href={social.url} target="_blank" rel="noreferrer" className="social-button">
                            {social.icon}
                        </a>
                    ))}
                </div>
                <div className="languages disable-button">
                    <i className="fas fa-globe-asia"></i>
                    <p className="language">English</p>
                    <div className="arrow"></div>
                </div>
            </div>
            <div className="footer-info">
                <div className="logo-wrapper">
                    <a href="https://www.hoyoverse.com/en-us?utm_source=genshin&utm_medium=footer" target="_blank" rel="noreferrer">
                        <img src={miHoYo_logo} alt="" />
                    </a>
                    <img src={genshin_logo} alt="" />
                </div>
                <div className="content-wrapper">
                    <div className="links">
                        <a href="https://genshin.hoyoverse.com/en/company/privacy" 
                            target="_blank"
                            rel="noreferrer"
                            className="link">Privacy Policy</a>
                        <a href="https://genshin.hoyoverse.com/en/company/terms" 
                            target="_blank"
                            rel="noreferrer"
                            className="link">Terms of Service</a>
                        <a href="https://www.hoyoverse.com/en-us/about-us?utm_source=genshin&utm_medium=footer" 
                            target="_blank"
                            rel="noreferrer"
                            className="link">About Us</a>
                        <a href="mailto:genshin_cs@hoyoverse.com" className="link">Contact Us</a>
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
                    <a href="https://pegi.info/" target="_blank" rel="noreferrer">
                        <img src={europe} alt="" />
                    </a>
                        <img src={us_canada} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
