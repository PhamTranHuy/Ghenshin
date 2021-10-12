import React from 'react'
import './HomePage.scss'
import ps4_logo from './assets/poster/ps4.png' 
import app_store_logo from './assets/poster/app-store.png' 
import google_play_logo from './assets/poster/google-play.png' 
import windows_logo from './assets/poster/windows.png' 

function HomePage() {
    return (
        <div className="home">
            <div className="home_poster">
                <div className="background-wrapper">
                    <video autoPlay={true} muted={true} loop>
                        <source src="https://genshin.mihoyo.com/_nuxt/videos/3e78e80.mp4" type="audio/mp4"/>
                    </video>
                </div>
                <div className="poster-sign">
                    <div className="play-button-wrapper">
                        <button className="play-button"></button>
                    </div>
                    <div className="desc">Released on Multiple Platforms - Download Now!</div>
                    <div className="download-banner">
                        <a href="#" className="download-button"><img src={ps4_logo}/></a>
                        <a href="#" className="download-button"><img src={app_store_logo}/></a>
                        <a href="#" className="download-button"><img src={google_play_logo}/></a>
                        <a href="#" className="download-button"><img src={windows_logo}/></a>
                    </div>
                    <div>poster arrow</div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
