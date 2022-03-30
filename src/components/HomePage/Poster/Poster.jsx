import React, { useState } from 'react'
import './Poster.scss'

import ps4_logo from '../assets/poster/ps4.png' 
import app_store_logo from '../assets/poster/app-store.png' 
import google_play_logo from '../assets/poster/google-play.png' 
import windows_logo from '../assets/poster/windows.png' 
import poster_arrow_icon from '../assets/poster/down-arrow.png'
import poster_age_logo from '../assets/poster/poster-age.png'
import close_button from '../assets/poster/close-icon.png'
import Logo from '../assets/poster/mobile-logo.png'
import video_poster from '../assets/poster/video-poster.jpg'

import Popup from '../../../ShareComponent/Popup/Popup'
import useWindowSize from '../../../CustomHook/WindowSize'
import useWindowScroll from '../../../CustomHook/WindowScroll'


function Poster() {
    const [triggerPopup, setTriggerPopup] = useState(false);
    const windowSize = useWindowSize();
    const windowScroll = useWindowScroll();
    const handleVideoPosterSize = () => {
        if (windowSize.width <= 850) {
            return {
                width: windowSize.width + 'px'
            }
        }
    }
    return (
        <div className="home_poster">
            <div className="mobile-logo-wrapper" style={{display: windowScroll.scrollY > 0 ? 'none' : ''}}>
                <img src={Logo} alt="logo" />
            </div>
            <div className="background-wrapper">
                <video autoPlay={true} muted={true} loop poster={video_poster}>
                    <source src="https://genshin.mihoyo.com/_nuxt/videos/3e78e80.mp4" type="audio/mp4"/>
                </video>
            </div>
            <div className="poster-sign">
                <div className="play-button-wrapper">
                    <button className="play-button" onClick={() => {setTriggerPopup(true)}}></button>
                </div>
                <div className="desc">Released on Multiple Platforms - Download Now!</div>
                <div className="download-banner">
                    <a href="https://www.playstation.com/en-vn/games/genshin-impact/" 
                        target="_blank"
                        rel="noreferrer"
                        className="download-img">
                        <img src={ps4_logo} alt=""/>
                    </a>
                    <a href="https://apps.apple.com/app/id1517783697" 
                        target="_blank" 
                        rel="noreferrer"
                        className="download-img">
                        <img src={app_store_logo} alt=""/>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact" 
                        target="_blank"
                        rel="noreferrer"
                        className="download-img">
                        <img src={google_play_logo} alt=""/>
                    </a>
                    <a href="https://sg-public-api.hoyoverse.com/event/download_porter/link/ys_global/genshinimpactpc/default"
                        target="_blank"
                        rel="noreferrer"
                        className="download-img">
                        <img src={windows_logo} alt=""/>
                    </a>
                    <a href="https://apps.apple.com/app/id1517783697?mt=8" 
                        target="_blank"
                        rel="noreferrer"
                        className="download-button">
                        <div>Download Now</div>
                    </a>
                </div>
                <div className="poster-arrow-wrapper">
                    <img className="poster-arrow poster-arrow--first" src={poster_arrow_icon} alt="" />
                    <img className="poster-arrow poster-arrow--second" src={poster_arrow_icon} alt="" />
                    <img className="poster-arrow poster-arrow--third" src={poster_arrow_icon} alt="" />
                </div>
            </div>
            <div className="poster-age">
                <img src={poster_age_logo} alt="" />
            </div>
            <Popup trigger={triggerPopup} handleMaskClicked={() => {setTriggerPopup(false)}}>
                <div className="pop-up_video-wrapper" style={handleVideoPosterSize()}>
                    <iframe title="poster-video" className="video" src="https://www.youtube.com/embed/5DuZblVxG3I" 
                    scrolling="no" border="0" frameBorder="no" framespacing="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen="allowfullscreen"></iframe>
                    <button className="close-button" onClick={() => {setTriggerPopup(false)}}>
                        <img src={close_button} alt=""/>
                    </button>
                </div>
            </Popup>
        </div>
    )
}

export default Poster
