import React from 'react'
import City from './City/City'
import './HomePage.scss'
import NewsSection from './NewsSection/NewsSection'
import Poster from './Poster/Poster'

import Mondstadt from './assets/city/Mondstadt.jpg'
import Liyue from './assets/city/Liyue.jpg'
import Inazuma from './assets/city/Inazuma.jpg'
import chacter_1 from './assets/city/character-1.png'
import chacter_2 from './assets/city/character-2.png'
import chacter_3 from './assets/city/character-3.png'

const CITIES = [
    {
        name: 'Mondstadt',
        background: Mondstadt,
        character: chacter_1
    }, {
        name: 'Liyue',
        background: Liyue,
        character: chacter_2
    }, {
        name: 'Inazuma',
        background: Inazuma,
        character: chacter_3
    }
];

function HomePage() {
    return (
        <div className="home">
           <Poster />
           <NewsSection />
           {CITIES.map((city, i) => (<City key={i} name={city.name} background={city.background} character={city.character} />))}
        </div>
    )
}

export default HomePage
