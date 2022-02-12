import "../NewsBlock/NewsBlock.scss"

function NewsBlock({newsInfo}) {
    return (
        <div className="news-block">
            <div className="img-wrapper">
                <img src={newsInfo.img} alt="" />
            </div>
            <h3 className="title">{newsInfo.title}</h3>
            <p className="desc">{newsInfo.desc}</p>
            <div className="meta">
                <p className="date"></p>
                <p className="category">{newsInfo.category}</p>
            </div>
        </div>
    )
}

export default NewsBlock
