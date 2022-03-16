import { useState, useEffect, useRef, useCallback } from "react"
import "./CustomScrollbar.scss"

function CustomScrollbar({children}) {
    const contentRef = useRef(null);
    const scrollThumbRef = useRef(null);
    const scrollTrackRef = useRef(null);
    const observer = useRef(null);
    const [thumbHeight, setThumbHeight] = useState();

    const handleResize = (contentRef, scrollTrackRef) => {
        const { clientHeight, scrollHeight } = contentRef.current;
        const {clientHeight: trackSize} = scrollTrackRef.current;
        const thumbHeight = (clientHeight / scrollHeight) * trackSize;
        setThumbHeight(thumbHeight);
    }
    const handleThumbPosition = useCallback(() => {
        if (!contentRef.current || !scrollTrackRef.current || !scrollThumbRef.current) {
            return;
        }
        const {scrollTop, scrollHeight} = contentRef.current;
        const newTop = (scrollTop / scrollHeight) * scrollTrackRef.current.clientHeight;
        scrollThumbRef.current.style.top = `${newTop}px`;
    }, [])

    // If the content and the scrollbar track exist, use a ResizeObserver 
    // to adjust height of thumb and listen for scroll event to move the thumb
    useEffect(() => {
        if (contentRef.current && scrollTrackRef.current) {
            observer.current = new ResizeObserver(() => {
                handleResize(contentRef, scrollTrackRef);
            });
            observer.current.observe(contentRef.current);
            contentRef.current.addEventListener('scroll', handleThumbPosition);
            return () => {
                observer.current?.unobserve(contentRef.current);
                contentRef.current.removeEventListener('scroll', handleThumbPosition);
            }
        }
    }, [])
    return (
        <div className="custom-scrollbar_container">
            <div className="content" ref={contentRef}>
                {children}
            </div>
            <div className="scrollbar">
                <div className="track" ref={scrollTrackRef}></div>
                <div className="thumb" ref={scrollThumbRef} style={{height: `${thumbHeight}px`}}></div>
            </div>
        </div>
    )
}

export default CustomScrollbar
