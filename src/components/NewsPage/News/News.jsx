import CategoryItem from "./CategoryItem/CategoryItem";
import "./News.scss"

const CATEGORY = ["latest", "info", "updates", "events"];

function News() {
    return (
        <div className="news">
            <ul className="category-wrapper">
                {CATEGORY.map((item, index) => (
                    <CategoryItem key={index} title={item} />
                ))}
            </ul>
        </div>
    )
}

export default News
