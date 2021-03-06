import React from 'react'
import HOME_DATA from '../data'
import './FollowUs.scss'
import frame from '../assets/news/frame.png'
import FixedMenu from '../../../ShareComponent/FixedMenu/FixedMenu'

function FollowUs() {
    return (
        <div className="follow-us">
            <div className="follow-us-container">
                <div className="header">
                    <div className="frame"><img src={frame} alt="" /></div>
                    <div className="frame"><img src={frame} alt="" style={{transform: 'scaleX(-1)'}}/></div>
                </div>
                <ul className="list-container">
                    {HOME_DATA.SOCIALS.map((social, index) => (
                        <li className="list-item" key={index}>
                            <a href={social.url} target="_blank" rel="noreferrer" className="social-wrapper">
                                <div>{social.icon}</div>
                                <p>{social.name}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <FixedMenu>
                {HOME_DATA.SOCIALS.map((social, index) => (
                    <a key={index} href={social.url} target="_blank" rel="noreferrer" className="social-wrapper">
                        <div>{social.icon}</div>
                        <p>{social.name}</p>
                    </a>
                ))}
            </FixedMenu>
        </div>
    )
}

export default FollowUs
