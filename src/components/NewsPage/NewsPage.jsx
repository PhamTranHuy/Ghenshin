import "./NewsPage.scss"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Recommend from "./Recommend/Recommend"
import News from "./News/News"
import GET_NEWS_INFO_API from "./data";
import { useState, useEffect } from "react";
import useWindowScroll from "../../CustomHook/WindowScroll"
import clsx from "clsx"

function NewsPage() {
    const [newsInfo, setNewsInfo] = useState([]);
    const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);
    const windowScroll = useWindowScroll();

    const handleScrollToTopClicked = () => {
        window.scrollTo(windowScroll.scrollX, 0);
    }

    useEffect(() => {
        const fetchNewsInfo = async () => {
            const newsInfo = await GET_NEWS_INFO_API();
            setNewsInfo(newsInfo);
        }
        fetchNewsInfo();
    }, [])
    useEffect(() => {
        if (windowScroll.scrollY >= 550) {
            setShowScrollToTopButton(true);
        } else {
            setShowScrollToTopButton(false);
        }
    }, [windowScroll])
    return (
        <div className="news-page">
            <Header />
            <Recommend newsInfo={newsInfo}/>
            <News newsInfo={newsInfo}/>
            <Footer />
            <div className={clsx("scroll-to-top", showScrollToTopButton && "show")} onClick={handleScrollToTopClicked}></div>
        </div>
    )
}

export default NewsPage
