import "../Recommend/Recommend.scss"
import NewsBlock from "./NewsBlock/NewsBlock"
import NEWS_INFO from "../data";

function Recommend() {
    return (
        <div className="recommend">
            <div className="wrapper">
                <div className="news-block-container">
                    <NewsBlock newsInfo={NEWS_INFO[0]}/>
                </div>
            </div>
        </div>
    )
}

export default Recommend
