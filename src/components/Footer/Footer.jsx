import './Footer.scss';

function Footer() {
    return (
        <div class='footer'>
            <div className="footer-top">
                <div className="social-wrapper">
                    <a href="" className="social-button">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="" className="social-button">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="" className="social-button">
                        <i class="fab fa-youtube"></i>
                    </a>
                    <a href="" className="social-button">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="" className="social-button">
                        <i class="fab fa-discord"></i>
                    </a>
                    <a href="" className="social-button">
                        <i class="fab fa-reddit-alien"></i>
                    </a>
                    <a href="" className="social-button">
                        <i class="fas fa-dragon"></i>
                    </a>
                </div>
                <div className="languages">
                    <i class="fas fa-globe-asia"></i>
                    <p className="language">English</p>
                    <div className="arrow"></div>
                </div>
            </div>
            <div className="footer-info"></div>
        </div>
    )
}

export default Footer
