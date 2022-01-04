import React, { useEffect, useState } from 'react'
import useAudio from '../../CustomHook/Audio'
import Navigator from './Navigator/Navigator'
import Popup from '../../ShareComponent/Popup/Popup'
import HamburgerMenu from './HamburgerMenu/HamburgerMenu'
import './Header.scss'
import UnMusic from './assets/icon/un-music.png'
import Music from './assets/icon/music.png'
import Logo from './assets/icon/logo.png'
import User from './assets/icon/user.png'
import useWindowSize from '../../CustomHook/WindowSize'

const WAVE_SOUND = 'https://genshin.mihoyo.com/_nuxt/medias/video-play.06ec9738.mp3';
const MUSIC = 'https://genshin.mihoyo.com/_nuxt/medias/video-bgm.d8637316.mp3';

function Header() {
    const [playMusic, setPlayMusic] = useState(false);
    const [activeHamburger, setActiveHamburger] = useState(false);
    const setPlayingWaveSound = useAudio(WAVE_SOUND);
    const setPlayingMusic = useAudio(MUSIC);
    const windowSize = useWindowSize();

    const handleMusicClicked = () => {
        setPlayMusic((playMusic) => !playMusic);
    }
    const toggleMusic = () => {
        if (playMusic) {
            setPlayingMusic(true);
            setPlayingWaveSound(true);
        } else {
            setPlayingMusic(false);
            setPlayingWaveSound(false);
        }
    }
    const handleHamburgerClicked = () => {
        setActiveHamburger((activeHamburger) => !activeHamburger);
    }
    useEffect(() => {
        toggleMusic();
    }, [playMusic])

    useEffect(() => {
        if (windowSize.width >= 1200) {
            setActiveHamburger(false);
        }
    }, [windowSize])

    return (
        <header className="home_header">
            <div className="music-box">
                <img src={playMusic ? Music : UnMusic} alt="music" onClick={handleMusicClicked}/>
            </div>
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <Navigator />
            <div className="space"></div>
            <div className="login">
                <div>Log In</div>
                <div className="icon"><img src={User} alt="logo" /></div>
            </div>
            <a href="" className="download">
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
