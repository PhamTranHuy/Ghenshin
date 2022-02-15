import "../Recommend/Recommend.scss"
import NewsBlock from "./NewsBlock/NewsBlock"

function Recommend({newsInfo}) {
    return (
        <div className="recommend">
            <div className="wrapper">
                <div className="news-block-container">
                    {newsInfo.filter((item, index) => index <= 2)
                        .map((item, index) => 
                        <NewsBlock newsInfo={item} key={index} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Recommend
