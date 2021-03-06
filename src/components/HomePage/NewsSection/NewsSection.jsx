import React, { useState, useEffect } from 'react'
import useFormatDay from '../../../CustomHook/FormatDay'
import Carousel from '../../../ShareComponent/Carousel/Carousel'
import './NewsSection.scss'
import news_img_1 from '../assets/news/news-img-1.jpg'
import news_img_2 from '../assets/news/news-img-2.jpg'
import news_img_3 from '../assets/news/news-img-3.jpg'
import news_img_4 from '../assets/news/news-img-4.jpg'
import frame from '../assets/news/frame.png'
import NEWS from './data'
import useWindowSize from '../../../CustomHook/WindowSize'
import ImgLoaderPlaceholder from '../../../ShareComponent/ImgLoaderPlaceholder/ImgLoaderPlaceholder'
import { NavLink } from 'react-router-dom'

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
];
const newsImgWidthHeightRatio = 1.6;

function NewsSection() {
    const formatDate = useFormatDay();
    const windowSize = useWindowSize();
    const [carouselWidth, setCarouselWidth] = useState(640);
    const [placeholderImgSize, setPlaceholderImgSize] = useState({
        width: 640,
        height: 400
    })
    useEffect(() => {
        if (windowSize.width <= 1200) {
            const newsWrapperWidth = document.querySelector('.news-wrapper').offsetWidth;
            setCarouselWidth(newsWrapperWidth);
            const placeHolderHeight = newsWrapperWidth / newsImgWidthHeightRatio;
            setPlaceholderImgSize({
                width: newsWrapperWidth,
                height: placeHolderHeight
            });
        } else {
            setCarouselWidth(640);
            setPlaceholderImgSize({
                width: 640,
                height: 400
            });
        }
    }, [windowSize])
    return (
        <div className="home_news-section">
            <div className="news-title">
                <div className="frame"><img src={frame} alt="" /></div>
                <h1 className="title">NEWS</h1>
                <div className="frame"><img src={frame} alt="" style={{transform: 'scaleX(-1)'}}/></div>
            </div>
            <div className="news-container">
                <div className="carousel-wrapper">
                    <Carousel width={carouselWidth} autoSlideTime={5000} slideButton={false}>
                        {CAROUSEL_ITEMS.map((item, i) => (
                            <div style={{display: 'flex'}} key={i}>
                                <ImgLoaderPlaceholder src={item.img} style={{width: `${carouselWidth}px`}} placeholderSize={placeholderImgSize}/>
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className="news-wrapper">
                    <ul className="header">
                        <li className="title">Lasted</li>
                    </ul>
                    <div className="news">
                        {NEWS.map((item) => (
                            <div key={item.id} className="new-wrapper">
                                <p className="title">{item.title}</p>
                                <p className="date">{formatDate(item.date)}</p>
                            </div>
                        ))}
                    </div>
                    <NavLink to="/news" className="more-button">More</NavLink>
                </div>
            </div>
        </div>
    )
}

export default NewsSection
