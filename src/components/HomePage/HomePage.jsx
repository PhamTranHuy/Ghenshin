import React from 'react'
import './HomePage.scss'
import NewsSection from './NewsSection/NewsSection'
import Poster from './Poster/Poster'

function HomePage() {
    return (
        <div className="home">
           <Poster />
           <NewsSection />
        </div>
    )
}

export default HomePage
