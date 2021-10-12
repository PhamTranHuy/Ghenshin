import React from 'react'
import './HomePage.scss'
import play_icon from './assets/poster/play.png' 

function HomePage() {
    return (
        <div className="home">
            <div className="home_poster">
                <div className="background-wrapper">
                    <video autoplay="autoplay" muted="true" loop>
                        <source src="https://genshin.mihoyo.com/_nuxt/videos/3e78e80.mp4" type="audio/mp4"/>
                    </video>
                </div>
                <div className="poster-sign">
                    <div className="play-button-wrapper">
                        <button className="play-button"></button>
                    </div>
                    <div className="desc">Released on Multiple Platforms - Download Now!</div>
                    <div>download banner</div>
                    <div>poster arrow</div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
