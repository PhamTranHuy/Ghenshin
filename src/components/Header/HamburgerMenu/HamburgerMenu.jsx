import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import "./HamburgerMenu.scss"

function HamburgerMenu() {
    const [explore, setExplore] = useState(false);

    const handleExploreClicked = (e) => {
        e.stopPropagation();
        setExplore((explore) => !explore);
    }

    useEffect(() => {
        setTimeout(() => {
            document.querySelector('.hamburger-menu').style.transform = 'translateX(0)';
        })
    }, [])
    return (
        <div className="hamburger-menu" onClick={(e) => {e.stopPropagation()}}>
            <div className="hamburger-header"></div>
            <nav className="hamburger-nav">
                <NavLink to="/home" className="nav-button">HOME</NavLink>
                <NavLink to="/news" className="nav-button">NEWS</NavLink>
                <NavLink to="/characters" className="nav-button">CHARACTERS</NavLink>
                <div id="explore" className={`${explore ? 'is-active' : ''} nav-button`} onClick={handleExploreClicked}>
                    <p>EXPLORE</p>
                    <ul className={`${explore ? 'is-active' : ''} explore-sub-menu disable-button`}>
                        <li>ABOUT GAME</li>
                        <li>TEYVAT</li>
                        <li>ITINERARY</li>
                        <li>MANGA</li>
                    </ul>
                </div>
                <a className="nav-button" 
                    href="https://www.hoyolab.com/home?utm_source=officialweb&utm_medium=game&utm_campaign=nav&utm_id=2/"
                    target="_blank"
                    rel="noreferrer">HoYoLAB</a>
                <a className="nav-button"
                    href="https://genshin.hoyoverse.com/payment"
                    target="_blank"
                    rel="noreferrer">TOP-UP</a>
                <div className="nav-button disable-button">REDEEM CODE</div>
            </nav>
            <div></div>
        </div>
    )
}

export default HamburgerMenu
