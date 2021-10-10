import React from 'react'
import Navigator from './Navigator/Navigator'
import './Header.scss'
import UnMusic from './icon/un-music.png'
import Logo from './icon/logo.png'
import User from './icon/user.png'

function Header() {
    return (
        <header className="header">
            <div className="music-box">
                <img src={UnMusic} alt="un-music" />
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
        </header>
    )
}

export default Header
