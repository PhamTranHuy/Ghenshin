import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Recommend from "./Recommend/Recommend"
import News from "./News/News"
import GET_NEWS_INFO_API from "./data";
import { useState, useEffect } from "react";

function NewsPage() {
    const [newsInfo, setNewsInfo] = useState([]);
    useEffect(() => {
        const fetchNewsInfo = async () => {
            const newsInfo = await GET_NEWS_INFO_API();
            setNewsInfo(newsInfo);
        }
        fetchNewsInfo();
    }, [])
    return (
        <div>
            <Header />
            <Recommend newsInfo={newsInfo}/>
            <News newsInfo={newsInfo}/>
            <Footer />
        </div>
    )
}

export default NewsPage
