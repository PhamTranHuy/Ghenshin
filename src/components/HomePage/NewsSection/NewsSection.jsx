import React from 'react'
import useFormatDay from '../../../CustomHook/FormatDay'
import Carousel from '../../../ShareComponent/Carousel/Carousel'
import './NewsSection.scss'
import news_img_1 from '../assets/news/news-img-1.jpg'
import news_img_2 from '../assets/news/news-img-2.jpg'
import news_img_3 from '../assets/news/news-img-3.jpg'
import news_img_4 from '../assets/news/news-img-4.jpg'
import frame from '../assets/news/frame.png'
import NEWS from './data'

const CAROUSEL_ITEMS = [
    {
        url: '',
        img: news_img_1
    },  {
        url: '',
        img: news_img_2
    },  {
        url: '',
        img: news_img_3
    },  {
        url: '',
        img: news_img_4
    }
]
function NewsSection() {
    const formatDate = useFormatDay();
    return (
        <div className="home_news-section">
            <div className="news-title">
                <div className="frame"><img src={frame} /></div>
                <h1 className="title">NEWS</h1>
                <div className="frame"><img src={frame} style={{transform: 'scaleX(-1)'}}/></div>
            </div>
            <div className="news-container">
                <div className="carousel-wrapper">
                    <Carousel>
                        {CAROUSEL_ITEMS.map((item, i) => (
                            <a style={{display: 'flex'}} key={i}>
                                <img src={item.img}/>
                            </a>
                        ))}
                    </Carousel>
                </div>
                <div className="news-wrapper">
                    <ul className="header">
                        <li className="title">Lasted</li>
                    </ul>
                    <div className="news">
                        {NEWS.map((item) => (
                            <a key={item.id} href={item.url} className="new-wrapper">
                                <p className="title">{item.title}</p>
                                <p className="date">{formatDate(item.date)}</p>
                            </a>
                        ))}
                    </div>
                    <a href='' className="more-button">More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsSection