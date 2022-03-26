import clsx from "clsx";
import useFormatDay from "../../../../CustomHook/FormatDay"
import ImgLoaderPlaceholder from "../../../../ShareComponent/ImgLoaderPlaceholder/ImgLoaderPlaceholder";
import "../NewsBlock/NewsBlock.scss"

function NewsBlock({newsInfo}) {
    const formatDate = useFormatDay();
    return (
        <div className="news-block">
            <div className="img-wrapper">
                <ImgLoaderPlaceholder className="news-img" src={newsInfo.img} alt="" />
            </div>
            <h1 className="title">{newsInfo.title}</h1>
            <p className="desc">{newsInfo.desc}</p>
            <div className="spaces"></div>
            <div className="meta">
                <p className="date">{formatDate(newsInfo.date)}</p>
                <p className={clsx("category", newsInfo.category)}>{newsInfo.category}</p>
            </div>
        </div>
    )
}

export default NewsBlock
