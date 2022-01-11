import { useState, useEffect } from 'react'

function useWindowScroll() {
    const [windowScroll, setWindowScroll] = useState({
        scrollX: undefined,
        scrollY: undefined
    })
    const handleScroll = () => {
        setWindowScroll({
            scrollX: window.scrollX,
            scrollY: window.scrollY
        })
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])
    return windowScroll;
}

export default useWindowScroll