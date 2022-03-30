import clsx from "clsx";
import { useState, useEffect, useRef } from "react"
import useWindowScroll from "../../CustomHook/WindowScroll"
import useWindowSize from "../../CustomHook/WindowSize"
import "./ImgLoaderPlaceholder.scss"

function ImgLoaderPlaceholder({className, style, src, alt, lazy = true, placeholderSize={}}) {
    const [ loaded, setLoaded ] = useState(false);
    const [ isOnViewPort, setIsInViewPort ] = useState(false);
    const loaderRef = useRef();
    const windowSize = useWindowSize();
    const windowScroll = useWindowScroll();
    const handleLoaded = () => {
        setLoaded(true);
    }
    const isImgOnViewPort = (elem) => {
        const rect = elem.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }
    useEffect(() => {
        if (lazy && loaderRef.current && isImgOnViewPort(loaderRef.current)) {
            setIsInViewPort(true);
        }
    }, [windowSize, windowScroll, lazy])
    useEffect(() => {
        setLoaded(false);
    }, [src]);
    return (
        <div className="img-loader-placeholder">
            {!loaded && <div className={clsx("loader",  className)} style={placeholderSize} ref={loaderRef}>
                <div className="lds-roller">
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                </div>
            </div>}
            {(!lazy || isOnViewPort) && <img src={src} alt={alt} 
                onLoad={handleLoaded} 
                style={{...style, display: loaded ? 'block' : 'none'}}
                className={className} />
            }
        </div>
    )
}

export default ImgLoaderPlaceholder