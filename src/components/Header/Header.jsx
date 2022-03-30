import { useContext, useEffect, useState } from 'react'
import { useLocation, NavLink } from 'react-router-dom'

import Navigator from './Navigator/Navigator'
import Popup from '../../ShareComponent/Popup/Popup'
import HamburgerMenu from './HamburgerMenu/HamburgerMenu'

import './Header.scss'

import UnMusic from './assets/icon/un-music.png'
import Music from './assets/icon/music.png'
import Logo from './assets/icon/logo.png'

import useWindowSize from '../../CustomHook/WindowSize'
import useWindowScroll from '../../CustomHook/WindowScroll'
import { MusicContext } from '../../Context'

function Header() {
    const [playMusic, toggleMusic] = useContext(MusicContext);
    const [activeHamburger, setActiveHamburger] = useState(false);
    const [hideHeaderMobile, setHideHeaderMobile] = useState(false);
    const windowSize = useWindowSize();
    const windowScroll = useWindowScroll();
    const location = useLocation();

    const handleHamburgerClicked = () => {
        setActiveHamburger((activeHamburger) => !activeHamburger);
    }
    
    useEffect(() => {
        if (windowSize.width >= 1200) {
            setActiveHamburger(false);
        }
    }, [windowSize])

    useEffect(() => {
        if (location.pathname !== '/home') {
            return;
        }
        if (windowSize.width < 1200 && windowScroll.scrollY === 0) {
            setHideHeaderMobile(true);
        } else {
            setHideHeaderMobile(false);
        }
    }, [windowScroll, windowSize, location.pathname])

    return (
        <header className={`home_header ${hideHeaderMobile ? 'none-active' : ''}`}>
            <div className="music-box">
                <img src={playMusic ? Music : UnMusic} alt="music" onClick={toggleMusic}/>
            </div>
            <div className="logo">
                <NavLink to="/home" className="logo-nav-link"></NavLink>
                <img src={Logo} alt="logo" />
            </div>
            <Navigator />
            <div className="space"></div>
            <a href="https://genshin.hoyoverse.com/en/download" target="_blank" rel="noreferrer" className="download">
                <div>Download</div>
            </a>
            <button className= {
                    `${'hamburger'} 
                    ${activeHamburger ? 'is-active' : ''}`
                    } 
                    onClick={handleHamburgerClicked}>
                    <div className="bar"></div>
            </button>
            <Popup trigger={activeHamburger} handleMaskClicked={handleHamburgerClicked}>
                <HamburgerMenu />
            </Popup>
        </header>
    )
}

export default Header
