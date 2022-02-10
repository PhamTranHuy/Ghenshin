import React from 'react'
import City from './City/City'
import './HomePage.scss'
import NewsSection from './NewsSection/NewsSection'
import Poster from './Poster/Poster'
import coming_soon from './assets/city/coming-soon.jpg'
import HOME_DATA from './data'
import FollowUs from './FollowUs/FollowUs'
function HomePage() {
    return (
        <div className="home">
            <Poster />
            <NewsSection />
            {HOME_DATA.CITIES.map((city, i) => (
                <City key={i} name={city.name} background={city.background} character={city.character} />
            ))}
            <City disable={true} name={'Coming Soon'} background={coming_soon} />
            <FollowUs />
        </div>
    )
}

export default HomePage
