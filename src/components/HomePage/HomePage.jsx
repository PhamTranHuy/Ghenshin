import React from 'react'
import './HomePage.scss'

function HomePage() {
    return (
        <div className="home">
            <div className="home_poster">
                <div className="background-wrapper">
                    <video autoplay="autoplay" muted="true" loop>
                        <source src="https://genshin.mihoyo.com/_nuxt/videos/3e78e80.mp4" type="audio/mp4"/>
                    </video>
                </div>
            </div>
        </div>
    )
}

export default HomePage
