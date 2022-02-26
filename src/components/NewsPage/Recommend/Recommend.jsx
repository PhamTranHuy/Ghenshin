import Carousel from "../../../ShareComponent/Carousel/Carousel"
import "../Recommend/Recommend.scss"
import NewsBlock from "./NewsBlock/NewsBlock"

function Recommend({newsInfo}) {
    return (
        <div className="recommend">
            <div className="wrapper">
                <div className="news-block-container" style={{display: 'none'}}>
                    {newsInfo.filter((item, index) => index <= 2)
                        .map((item, index) => 
                        <NewsBlock newsInfo={item} key={index} />
                    )}
                </div>
                <div className="news-block-carousel">
                    <Carousel width={window.innerWidth}>
                        {newsInfo.filter((item, index) => index <= 2)
                            .map((item, index) => 
                            <div className="item-wrapper" style={{width: window.innerWidth}}>
                                <NewsBlock newsInfo={item} key={index} />
                            </div>
                        )}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Recommend
