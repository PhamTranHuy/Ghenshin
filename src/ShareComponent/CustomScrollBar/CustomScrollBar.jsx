import { useState, useEffect, useRef } from "react"
import "./CustomScrollbar.scss"

function CustomScrollbar({children}) {
    const contentRef = useRef(null);
    const scrollThumbRef = useRef(null);
    const scrollTrackRef = useRef(null);
    const observable = useRef(null);
    const [thumbHeight, setThumbHeight] = useState();

    const handleResize = (contentRef, scrollTrackRef) => {
        const { clientHeight, scrollHeight } = contentRef.current;
        const {clientHeight: trackSize} = scrollTrackRef.current;
        const thumbHeight = (clientHeight / scrollHeight) * trackSize;
        setThumbHeight(thumbHeight);
    }
    useEffect(() => {
        if (contentRef.current && scrollTrackRef.current) {
            observable.current = new ResizeObserver(() => {
                handleResize(contentRef, scrollTrackRef);
            });
            observable.current.observe(contentRef)
            return () => {
                observable.current?.unobserve()
            }
        }
    }, [])
    return (
        <div className="custom-scrollbar_container">
            <div className="content" ref={contentRef}>
                {children}
            </div>
            <div className="scrollbar">
                <div className="track"></div>
                <div className="thumb" style={{height: `${thumbHeight}px`}}></div>
            </div>
        </div>
    )
}

export default CustomScrollbar
