import React from 'react'
import Navigator from './Navigator/Navigator'
import './Header.scss'

function Header() {
    return (
        <header className="header">
            <div>music</div>
            <div>logo</div>
            <Navigator />
            <div>Log in</div>
            <div>Dowload</div>
        </header>
    )
}

export default Header
