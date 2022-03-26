import clsx from "clsx";
import { useState } from "react"
import "./ImgLoaderPlaceholder.scss"

function ImgLoaderPlaceholder({className, style, src, alt, lazy = false, placeholderSize={width: '100%', height: '100%'}}) {
    const [loaded, setLoaded] = useState(false);
    const handleLoaded = () => {
        setLoaded(false);
    }
    return (
        <div style={style} className={clsx("img-loader-placeholder", className)}>
            {!loaded && <div className="loader" style={placeholderSize}>loading...</div>}
            <img src={src} alt={alt} onLoad={handleLoaded} style={{display: loaded ? 'block' : 'none'}}/>
        </div>
    )
}

export default ImgLoaderPlaceholder