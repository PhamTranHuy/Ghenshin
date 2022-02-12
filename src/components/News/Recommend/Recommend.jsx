import "../Recommend/Recommend.scss"
import NewsBlock from "./NewsBlock/NewsBlock"
import NEWS_INFO from "../data";

function Recommend() {
    return (
        <div className="recommend">
            <div className="wrapper">
                <div className="news-block-container">
                    {NEWS_INFO.filter((item, index) => index <= 2)
                        .map((item) => 
                        <NewsBlock newsInfo={item}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Recommend
