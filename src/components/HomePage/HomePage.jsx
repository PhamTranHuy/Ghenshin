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

function HomePage() {
    return (
        <div className="home">
           <Poster />
           <NewsSection />
           {CITIES.map((city, i) => (
                <City key={i} name={city.name} background={city.background} character={city.character} />
            ))}
             <City disable={true} name={'Coming Soon'} background={coming_soon} />
        </div>
    )
}

export default HomePage
