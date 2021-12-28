import React from 'react'
import City from './City/City'
import './HomePage.scss'
import NewsSection from './NewsSection/NewsSection'
import Poster from './Poster/Poster'
import FixedMenu from '../../ShareComponent/FixedMenu/FixedMenu'
import coming_soon from './assets/city/coming-soon.jpg'
import HOME_DATA from './data'
function HomePage() {
    return (
        <div className="home">
            <Poster />
            <NewsSection />
            {HOME_DATA.CITIES.map((city, i) => (
                <City key={i} name={city.name} background={city.background} character={city.character} />
            ))}
            <City disable={true} name={'Coming Soon'} background={coming_soon} />
            <FixedMenu>
                {HOME_DATA.SOCIALS.map((social, index) => (
                    <a key={index} href={social.url} className="social-container">
                        <div>{social.icon}</div>
                        <p>{social.name}</p>
                    </a>
                ))}
            </FixedMenu>
        </div>
    )
}

export default HomePage
