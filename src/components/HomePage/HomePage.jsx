import React from 'react'
import City from './City/City'
import './HomePage.scss'
import NewsSection from './NewsSection/NewsSection'
import Poster from './Poster/Poster'

import Mondstadt from './assets/city/Mondstadt.jpg'
import Liyue from './assets/city/Liyue.jpg'
import Inazuma from './assets/city/Inazuma.jpg'
import character_1 from './assets/city/character-1.png'
import character_2 from './assets/city/character-2.png'
import character_3 from './assets/city/character-3.png'
import coming_soon from './assets/city/coming-soon.jpg'
import FixedMenu from '../../ShareComponent/FixedMenu/FixedMenu'

const CITIES = [
    {
        name: 'Mondstadt',
        background: Mondstadt,
        character: character_1
    }, {
        name: 'Liyue',
        background: Liyue,
        character: character_2
    }, {
        name: 'Inazuma',
        background: Inazuma,
        character: character_3
    }
];
const SOCIALS = [
    {
        name: 'Facebook',
        icon: <i class="fab fa-facebook-f"></i>,
        url: ''
    }, {
        name: 'Twitter',
        icon: <i class="fab fa-twitter"></i>,
        url: ''
    }, {
        name: 'YouTube',
        icon: <i class="fab fa-youtube"></i>,
        url: ''
    }, {
        name: 'Instagram',
        icon: <i class="fab fa-instagram"></i>,
        url: ''
    }, {
        name: 'Discord',
        icon: <i class="fab fa-discord"></i>,
        url: ''
    }, {
        name: 'Reddit',
        icon: <i class="fab fa-reddit-alien"></i>,
        url: ''
    }, {
        name: 'HoYoLAB',
        icon: <i class="fas fa-dragon"></i>,
        url: ''
    }
]

function HomePage() {
    return (
        <div className="home">
            <Poster />
            <NewsSection />
            {CITIES.map((city, i) => (
                <City key={i} name={city.name} background={city.background} character={city.character} />
            ))}
            <City disable={true} name={'Coming Soon'} background={coming_soon} />
            <FixedMenu>
                {SOCIALS.map((social) => (
                    <a href={social.url} className="social-container">
                        <div>{social.icon}</div>
                        <p>{social.name}</p>
                    </a>
                ))}
            </FixedMenu>
        </div>
    )
}

export default HomePage
