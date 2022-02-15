import "./News.scss"
import { useEffect, useRef, useState } from "react";
import CategoryItem from "./CategoryItem/CategoryItem";
import NewsItem from "./NewsItem/NewsItem";
import GET_NEWS_INFO_API from "../data";

const CATEGORY = ["latest", "info", "updates", "events"];

function News({ newsInfo }) {
    const [category, setCategory] = useState('latest');
    const [categoryNewsInfo, setCategoryNewsInfo] = useState(newsInfo);
    const initialRender = useRef(true);
    const handleCategoryClicked = (e) => {
        setCategory(e.target.innerHTML);
    }
    useEffect(() => {
        setCategoryNewsInfo(newsInfo);
    }, [newsInfo])
    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
        } else {
            const fetchNewsInfo = async () => {
                console.log('News: call API get newsInfo');
                const newsInfo = await GET_NEWS_INFO_API(category);
                setCategoryNewsInfo(newsInfo);
            }
            fetchNewsInfo();
        }
    }, [category])
    return (
        <div className="news">
            <ul className="category-wrapper">
                {CATEGORY.map((item, index) => {
                    return <CategoryItem key={index} title={item} 
                        onClick={handleCategoryClicked} 
                        active={item === category ? true : false} />
                })}
            </ul>
            <div className="news-items-wrapper">
                {categoryNewsInfo.map((item, index) => (
                    <NewsItem news={item} category={category} key={index} />
                ))}
            </div>
        </div>
    )
}

export default News
