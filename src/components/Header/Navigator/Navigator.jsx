import { useEffect, useState, useRef } from 'react'
import { NavLink } from 'react-router-dom';
import './Navigator.scss'

const POINTER_TRANSITION_DURATION = 200;
function Navigator() {
    const [navPointerPosition, setNavPointerPosition] = useState({
        left: null,
        width: null
    })
    const [navButtonHover, setNavButtonHover] = useState(false);
    const navWrapper = useRef(null);
    
    const getPointerBarPosition = (target) => {
        const getLeftPosition = () => {
            return (target.getBoundingClientRect().left - navWrapper.current.getBoundingClientRect().left + navButtonPaddingLeft);
        }
        const navButtonPaddingLeft = parseInt(window.getComputedStyle(target, null).getPropertyValue('padding-left'));
        const navButtonPaddingRight = parseInt(window.getComputedStyle(target, null).getPropertyValue('padding-right'));
        const pointerWidth = target.offsetWidth - navButtonPaddingLeft - navButtonPaddingRight;
        const pointerOffsetX = getLeftPosition();
        return {
            left: pointerOffsetX,
            width: pointerWidth,
        }
    }

    useEffect(() => {
        // prevent pointer's animation during switch route
        setTimeout(() => {
            document.querySelector('.header_nav-pointer').style.transition = 'all 0.2s ease-out';
        }, POINTER_TRANSITION_DURATION)
        return () => {
            document.querySelector('.header_nav-pointer').style.transition = 'none';
        }
    }, [])

    useEffect(() => {
        // handle mouseover, mouseout event to set position to nav pointer
        const navButtons = document.querySelectorAll('.nav-button');
        const mouseoverHandle = (e) => {
            e.stopPropagation();
            setNavButtonHover(true);
            document.querySelector('.header_nav-pointer').style.transition = `all ${POINTER_TRANSITION_DURATION}ms ease-out`;
            setNavPointerPosition(getPointerBarPosition(e.currentTarget)) 
        }
        const mouseoutHandle = (e) => {
            setNavButtonHover(false)
        }
        navButtons.forEach((button) => { 
            button.addEventListener('mouseover', mouseoverHandle)
            button.addEventListener('mouseout', mouseoutHandle)
        })

        return () => { 
            navButtons.forEach((button) => { 
                button.removeEventListener('mouseover', mouseoverHandle)
                button.addEventListener('mouseout', mouseoutHandle)
            })
        }
    }, [])

    useEffect(() => {
        // pointer comeback active nav position when mouse out from nav button
        if (!navButtonHover) {
            const activeNavButton = document.querySelector('.nav-button.active');
            setNavPointerPosition(getPointerBarPosition(activeNavButton));
        }
    }, [navButtonHover])

    return (
        <div className="header_nav-wrapper" ref={navWrapper}>
            <nav className="header_nav">
                <NavLink to="/home" className="nav-button">HOME</NavLink>
                <NavLink to="/news" className="nav-button">NEWS</NavLink>
                <NavLink to="/characters" className="nav-button">CHARACTERS</NavLink>
                <div id="explore" className="sub-list-wrapper nav-button">
                    <div className="nav-button--explore">EXPLORE</div>
                    <ul className="sub-list explore">
                        <li className="sub-items">ABOUT GAME</li>
                        <li className="sub-items">TEYVAT</li>
                        <li className="sub-items">ITINERARY</li>
                        <li className="sub-items">MANGA</li>
                    </ul>
                </div>
                <div id="more-menu" className="sub-list-wrapper nav-button">
                    <div className="nav-button--explore">MORE</div>
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
            <div className="header_nav-pointer" style={{
                left: navPointerPosition.left + 'px',
                width: navPointerPosition.width + 'px'
            }}></div>
        </div>
    )
}

export default Navigator
