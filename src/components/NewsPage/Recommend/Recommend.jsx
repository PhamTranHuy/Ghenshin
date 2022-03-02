import Carousel from "../../../ShareComponent/Carousel/Carousel"
import "../Recommend/Recommend.scss"
import NewsBlock from "./NewsBlock/NewsBlock"
import useWindowSize from "../../../CustomHook/WindowSize"
import { useState, useLayoutEffect } from "react";

function Recommend({newsInfo}) {
    const windowSize = useWindowSize();
    const [carouselWidth, setCarouselWidth] = useState();
    useLayoutEffect(() => {
        setCarouselWidth(document.body.offsetWidth);
    }, [windowSize.width])
    return (
        <div className="recommend">
            <div className="wrapper">
                {
                    windowSize.width > 1200 && <div className="news-block-container">
                        {newsInfo.filter((item, index) => index <= 2)
                            .map((item, index) => 
                            <NewsBlock newsInfo={item} key={index} />
                        )}
                    </div>
                } 
                { 
                    windowSize.width <= 1200 && <div className="news-block-carousel">
                        <Carousel width={carouselWidth}>
                            {newsInfo.filter((item, index) => index <= 2)
                                .map((item, index) => 
                                <div key={index} className="item-wrapper" style={{width: carouselWidth}}>
                                    <NewsBlock newsInfo={item} key={index} />
                                </div>
                            )}
                        </Carousel>
                    </div>
                }
            </div>
        </div>
    )
}

export default Recommend
