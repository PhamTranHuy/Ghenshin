import "./News.scss"
import { useEffect, useRef, useState } from "react";
import CategoryItem from "./CategoryItem/CategoryItem";
import NewsItem from "./NewsItem/NewsItem";
import GET_NEWS_INFO_API from "../data";
import useNonInitialEffect from "../../../CustomHook/NonInitialEffect";

const CATEGORY = ["latest", "info", "updates", "events"];
const ITEMS_NUMBER = 5;

function News({ newsInfo }) {
    const [category, setCategory] = useState('latest');
    const [news, setNews] = useState(newsInfo);
    const [hideMoreButton, setHideMoreButton] = useState(false);
    const newsPage = useRef(1);

    const fetchNewsInfo = async (category, page = 1, itemsNumber = 5) => {
        console.log('News: call API get newsInfo');
        const newsInfo = await GET_NEWS_INFO_API(category, page, itemsNumber);
        return newsInfo;
        
    }
    const handleCategoryClicked = (e) => {
        newsPage.current = 1;
        setCategory(e.target.innerHTML);
    }
    const handleMoreButtonClicked = async () => {
        newsPage.current = newsPage.current + 1;
        const newsItems = await fetchNewsInfo(category, newsPage.current, ITEMS_NUMBER);
        setNews((news) => [...news, ...newsItems]);
        if (newsItems.length < ITEMS_NUMBER) {
            setHideMoreButton(true);
        }
    }

    useEffect(() => {
        setNews(newsInfo);
    }, [newsInfo])

    useNonInitialEffect(() => {
        (async () => {
            const newsItems = await fetchNewsInfo(category);
            if (newsItems.length < ITEMS_NUMBER) {
                setHideMoreButton(true);
            } else {
                setHideMoreButton(false);
            }
            setNews(newsItems);
        })()
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
                {news.map((item, index) => (
                    <NewsItem news={item} category={category} key={index} />
                ))}
                {!hideMoreButton && <div className="more-button" onClick={handleMoreButtonClicked}>More</div>}
            </div>
        </div>
    )
}

export default News
