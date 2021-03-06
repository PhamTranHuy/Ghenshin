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
                        <li className="sub-items disable-button">ABOUT GAME</li>
                        <li className="sub-items disable-button">TEYVAT</li>
                        <li className="sub-items disable-button">ITINERARY</li>
                        <li className="sub-items disable-button">MANGA</li>
                    </ul>
                </div>
                <div id="more-menu" className="sub-list-wrapper nav-button">
                    <div className="nav-button--explore">MORE</div>
                    <ul className="sub-list explore">
                        <li className="sub-items">
                            <a href="https://www.hoyolab.com/home?utm_source=officialweb&utm_medium=game&utm_campaign=nav&utm_id=2/"
                                target="_blank"
                                rel="noreferrer">HoYoLAB</a>
                        </li>
                        <li className="sub-items">
                            <a href="https://genshin.hoyoverse.com/payment"
                                target="_blank"
                                rel="noreferrer">TOP-UP</a>
                        </li>
                        <li className="sub-items disable-button">REDEEM CODE</li>
                    </ul>
                </div>
                <a className="nav-button more-item" 
                    href="https://www.hoyolab.com/home?utm_source=officialweb&utm_medium=game&utm_campaign=nav&utm_id=2/"
                    target="_blank"
                    rel="noreferrer">HoYoLAB</a>
                <a className="nav-button more-item"
                    href="https://genshin.hoyoverse.com/payment"
                    target="_blank"
                    rel="noreferrer">TOP-UP</a>
                <div className="nav-button more-item disable-button">REDEEM CODE</div>
            </nav>
            <div className="header_nav-pointer" style={{
                left: navPointerPosition.left + 'px',
                width: navPointerPosition.width + 'px'
            }}></div>
        </div>
    )
}

export default Navigator
