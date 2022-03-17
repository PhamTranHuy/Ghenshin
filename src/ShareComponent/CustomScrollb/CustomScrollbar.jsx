import { useState, useEffect, useRef, useCallback } from "react"
import "./CustomScrollbar.scss"

function CustomScrollbar({children}) {
    const contentRef = useRef(null);
    const scrollThumbRef = useRef(null);
    const scrollTrackRef = useRef(null);
    const observer = useRef(null);
    const [thumbHeight, setThumbHeight] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [scrollStartPosition, setScrollStartPosition] = useState(null);
    const [initialScrollTop, setInitialScrollTop] = useState(null);

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
    const handleTrackClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const { current: trackCurrent } = scrollTrackRef;
        const { current: contentCurrent } = contentRef;
        if (trackCurrent && contentCurrent) {
            // First, figure out click coord
            const { clientY } = e;
            // Next, figure out the distance between the top of the track and the top of viewport
            const trackClientRect = trackCurrent.getBoundingClientRect();
            const trackTop = trackClientRect.top;
            // middle thumb is going to jump to where user clicked, so we subtract half the thumb's height to offset the position
            const thumbOffset = -(thumbHeight / 2);
            // Find the ratio of the new position to the total content length using the thumb and track values...
            const clickRatio = (clientY - trackTop + thumbOffset) / trackCurrent.clientHeight;
            // compute top to scroll of content view
            const scrollAmount = clickRatio * contentCurrent.scrollHeight;
            // Finally, scroll to the new position!
            contentCurrent.scrollTo({
            top: scrollAmount,
            behavior: 'smooth',
            });
        }
    }
    const handleMouseDown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
        setScrollStartPosition(e.clientY);
        if (contentRef.current) {
            setInitialScrollTop(contentRef.current.scrollTop);
        }
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }
    const handleMouseMove = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        const { offsetHeight: contentOffsetHeight, scrollHeight: contentScrollHeight } = contentRef.current;
        const distanceScrollMore = (e.clientY - scrollStartPosition) / (contentOffsetHeight / thumbHeight);
        const newScrollTop = Math.min(initialScrollTop + distanceScrollMore, contentScrollHeight - contentOffsetHeight);
        contentRef.current.scrollTop = newScrollTop;
    }, [scrollStartPosition, thumbHeight])
    const handleMouseUp = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    }, [handleMouseMove])
    // If the content and the scrollbar track exist, use a ResizeObserver 
    // to adjust height of thumb and listen for scroll event to move the thumb
    useEffect(() => {
        if (contentRef.current && scrollTrackRef.current) {
            observer.current = new ResizeObserver(() => {
                handleResize(contentRef, scrollTrackRef);
            });
            observer.current.observe(contentRef.current);
            handleThumbPosition();
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
                <div className="track" ref={scrollTrackRef} onClick={handleTrackClick}></div>
                <div className="thumb" ref={scrollThumbRef} style={{
                    height: `${thumbHeight}px`,
                    transition: isDragging ? 'none' : `linear 0.1s`
                }} onMouseDown={handleMouseDown}></div>
            </div>
        </div>
    )
}

export default CustomScrollbar
