import { useState } from "react"
import { useEffect } from "react/cjs/react.development";
import "./HamburgerMenu.scss"

function HamburgerMenu() {
    const [explore, setExplore] = useState(false);

    const handleExploreClicked = (e) => {
        e.preventDefault();
        console.log(e)
        setExplore((explore) => !explore);
    }

    useEffect(() => {
        setTimeout(() => {
            document.querySelector('.hamburger-menu').style.transform = 'translateX(0)';
        })
    }, [])
    return (
        <div className="hamburger-menu">
            <div className="hamburger-header"></div>
            <nav className="hamburger-nav">
                <a className="nav-button" href="">HOME</a>
                <a className="nav-button" href="">NEW</a>
                <a className="nav-button" href="">CHARACTER</a>
                <div id="explore" className={`${explore ? 'is-active' : ''} nav-button`} onClick={handleExploreClicked}>
                    <p>EXPLORE</p>
                    <ul className={`${explore ? 'is-active' : ''} explore-sub-menu`}>
                        <li>ABOUT GAME</li>
                        <li>TEYVAT</li>
                        <li>ITINERARY</li>
                        <li>MANGA</li>
                    </ul>
                </div>
                <a className="nav-button" href="">HoYoLAB</a>
                <a className="nav-button" href="">TOP-UP</a>
                <a className="nav-button" href="">REDEEM CODE</a>
            </nav>
            <div></div>
        </div>
    )
}

export default HamburgerMenu
