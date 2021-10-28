import React, { useState } from 'react'
import './Poster.scss'

import ps4_logo from '../assets/poster/ps4.png' 
import app_store_logo from '../assets/poster/app-store.png' 
import google_play_logo from '../assets/poster/google-play.png' 
import windows_logo from '../assets/poster/windows.png' 
import poster_arrow_icon from '../assets/poster/down-arrow.png'
import poster_age_logo from '../assets/poster/poster-age.png'
import close_button from '../assets/poster/close-icon.png'

import Popup from '../../../ShareComponent/Popup/Popup'

function Poster() {
    const [triggerPopup, setTriggerPopup] = useState(false);

    return (
        <div className="home_poster">
            <div className="background-wrapper">
                <video autoPlay={true} muted={true} loop>
                    <source src="https://genshin.mihoyo.com/_nuxt/videos/3e78e80.mp4" type="audio/mp4"/>
                </video>
            </div>
            <div className="poster-sign">
                <div className="play-button-wrapper">
                    <button className="play-button" onClick={() => {setTriggerPopup(true)}}></button>
                </div>
                <div className="desc">Released on Multiple Platforms - Download Now!</div>
                <div className="download-banner">
                    <a href="#" className="download-button"><img src={ps4_logo}/></a>
                    <a href="#" className="download-button"><img src={app_store_logo}/></a>
                    <a href="#" className="download-button"><img src={google_play_logo}/></a>
                    <a href="#" className="download-button"><img src={windows_logo}/></a>
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
                <div className="pop-up_video-wrapper">
                    <iframe className="video" src="https://www.youtube.com/embed/5DuZblVxG3I" 
                    scrolling="no" border="0" frameBorder="no" framespacing="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen="allowfullscreen"></iframe>
                    <button className="close-button" onClick={() => {setTriggerPopup(false)}}>
                        <img src={close_button} />
                    </button>
                </div>
            </Popup>
        </div>
    )
}

export default Poster
