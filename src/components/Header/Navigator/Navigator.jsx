import React, { useEffect } from 'react'
import './Navigator.scss'

function Navigator() {
    const setPointerBarPosition = (target) => {
        const getLeftPosition = () => {
            return target.getBoundingClientRect().left;
        }

        const pointerBar = document.querySelector('.header_nav-pointer');
        const pointerWidth = target.offsetWidth;
        const pointerOffsetX = getLeftPosition();

        pointerBar.style.left = `${pointerOffsetX}px`;
        pointerBar.style.width = `${pointerWidth}px`;
    }
    useEffect(() => {
        const navButtons = document.querySelectorAll('.nav-button');
        
        navButtons.forEach((button) => { 
            button.addEventListener('mouseover', (e) => { setPointerBarPosition(e.target) })
        })

        return () => { 
            navButtons.forEach((button) => { 
                button.removeEventListener('mouseover', (e) => { setPointerBarPosition(e.target) })
            })
        }
    }, [])

    return (
        <div className="header_nav-wrapper">
            <nav className="header_nav">
                <div className="nav-button">HOME</div>
                <div className="nav-button">NEWS</div>
                <div className="nav-button">CHARACTERS</div>
                <div id="explore" className="sub-list-wrapper">
                    <div className="nav-button nav-button--explore">EXPLORE</div>
                    <ul className="sub-list explore">
                        <li className="sub-items">ABOUT GAME</li>
                        <li className="sub-items">TEYVAT</li>
                        <li className="sub-items">ITINERARY</li>
                        <li className="sub-items">MANGA</li>
                    </ul>
                </div>
                <div id="more-menu" className="sub-list-wrapper">
                    <div className="nav-button nav-button--explore">MORE</div>
                    <ul className="sub-list explore">
                        <li className="sub-items">HoYoLAB</li>
                        <li className="sub-items">TOP-UP</li>
                        <li className="sub-items">REDEEM CODE</li>
                    </ul>
                </div>
                <div className="nav-button more-item">HoYoLAB</div>
                <div className="nav-button more-item">TOP-UP</div>
                <div className="nav-button more-item">REDEEM CODE</div>
            </nav>
            <div className="header_nav-pointer"></div>
        </div>
    )
}

export default Navigator
