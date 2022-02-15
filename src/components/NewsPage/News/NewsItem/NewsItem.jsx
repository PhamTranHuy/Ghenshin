import "./NewsItem.scss";
import useFormatDate from "../../../../CustomHook/FormatDay"
function NewsItem({ news }) {
    const formatDate = useFormatDate()
    return (
        <div className="news-block-wrapper">
            <div className="img-wrapper">
                <img src={news.img} alt="" />
            </div>
            <div className="content-wrapper">
                <h1 className="title">{news.title}</h1>
                <p className="desc">{news.desc}</p>
                <div className="meta">
                    <p className="date"></p>
                    <p className="category">{news.category}</p>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
