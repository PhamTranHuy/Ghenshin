import "./NewsItem.scss";
import useFormatDate from "../../../../CustomHook/FormatDay"
import clsx from "clsx";
function NewsItem({ news, category }) {
    const formatDate = useFormatDate()
    return (
        <div className="news-item-wrapper">
            <div className="img-wrapper">
                <img src={news.img} alt="" />
            </div>
            <div className="content-wrapper">
                <h1 className="title">{news.title}</h1>
                <p className="desc">{news.desc}</p>
                <div className="space"></div>
                <div className="meta">
                    <p className="date">{formatDate(news.date)}</p>
                    {category === 'latest' && (<p className={clsx("category", news.category)}>{news.category}</p>)}
                </div>
            </div>
        </div>
    )
}

export default NewsItem
