import clsx from "clsx";
import { useState } from "react"
import { useEffect } from "react/cjs/react.development";
import "./ImgLoaderPlaceholder.scss"

function ImgLoaderPlaceholder({className, style, src, alt, lazy = false, placeholderSize={}}) {
    const [loaded, setLoaded] = useState(false);
    const handleLoaded = () => {
        setLoaded(true);
    }
    useEffect(() => {
        setLoaded(false);
    }, [src]);
    return (
        <div className="img-loader-placeholder">
            {!loaded && <div className={clsx("loader",  className)} style={placeholderSize}>
                <div className="lds-roller">
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                </div>
            </div>}
            <img src={src} alt={alt} 
                onLoad={handleLoaded} 
                style={{...style, display: loaded ? 'block' : 'none'}}
                className={className} />
        </div>
    )
}

export default ImgLoaderPlaceholder