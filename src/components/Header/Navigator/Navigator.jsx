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
        return navButtons.forEach((button) => { 
            button.removeEventListener('mouseover', (e) => { setPointerBarPosition(e.target) })
        })
    }, [])

    return (
        <div className="header_nav-wrapper">
            <nav className="header_nav">
                <div className="nav-button">HOME</div>
                <div className="nav-button">NEWS</div>
                <div className="nav-button">CHARACTERS</div>
                <div className="nav-button">EXPLORE</div>
                <div className="nav-button">HoYoLAB</div>
                <div className="nav-button">TOP-UP</div>
                <div className="nav-button">REDEEM CODE</div>
            </nav>
            <div className="header_nav-pointer"></div>
        </div>
       
    )
}

export default Navigator
