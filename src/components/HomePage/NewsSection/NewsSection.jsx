import React from 'react'
import Carousel from '../../../ShareComponent/Carousel/Carousel'
import './NewsSection.scss'
import news_img_1 from '../assets/news/news-img-1.jpg'
import news_img_2 from '../assets/news/news-img-2.jpg'
import news_img_3 from '../assets/news/news-img-3.jpg'
import news_img_4 from '../assets/news/news-img-4.jpg'
const CAROUSEL_ITEMS = [
    {
        url: '#',
        img: news_img_1
    },  {
        url: '#',
        img: news_img_2
    },  {
        url: '#',
        img: news_img_3
    },  {
        url: '#',
        img: news_img_4
    }
]
function NewsSection() {
    return (
        <div className="home_news-section">
            <div className="news-wrapper">
                <div className="carousel-wrapper">
                    <Carousel>
                        {CAROUSEL_ITEMS.map((item, i) => (
                            <a key={i} href={item.url}>
                                <img src={item.img}/>
                            </a>
                        ))}
                    </Carousel>
                </div>
                <div className="news-wrapper">news</div>
            </div>
        </div>
    )
}

export default NewsSection
