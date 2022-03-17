import { useEffect } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx';
import useCarousel from '../../CustomHook/Carousel/Carousel';
import './Carousel.scss'

function Carousel({
    children, 
    width = 640, 
    translateSize = width, 
    infinite = true, 
    autoSlideTime = 0, 
    paginationButton = true, 
    slideButton = true,
    slidesPerView = 1,
    dragAble = true,
    onActiveChange
}) {
    const {
        slide,
        activeIndex,
        dragToSlide,
        jumpTo,
        next,
        prev,
        style
    } = useCarousel({children, translateSize, infinite, slidesPerView});
    useEffect(() => {
        if (autoSlideTime) {
            const timer = setTimeout(() => {
                jumpTo(activeIndex + 1);
            }, autoSlideTime)
            return () => {
                clearTimeout(timer);
            }
        }
        onActiveChange(activeIndex);
    }, [autoSlideTime, activeIndex])
    return (
        <div className={'carousel-container'} style={{width: `${width}px` }}>
            <div className={'carousel-outer'}>
                <div className={'carousel-inner'} style={style}>
                    {slide?.map((item, i) => (
                        <div key={i} 
                            className={clsx('item', activeIndex === i && "is-active")}
                            onMouseDown={dragAble ? dragToSlide : () => {}}
                            onClick={() => {jumpTo(i)}}
                        >{item}</div>
                    ))}
                </div>
            </div>
            {paginationButton && (
                <div className={'carousel-swiper-pagination-wrapper'}>
                    {children?.map((item, i) => (
                        <div key={i} 
                            className={clsx('swiper-pagination-bullet', activeIndex === i && "is-active")}
                            onClick={() => {jumpTo(i)}}/>
                    ))}
                </div>
            )}
            {slideButton && (
                <>
                    <div className="carousel-btn next" onClick={next}></div>
                    <div className="carousel-btn prev" onClick={prev}></div>
                </>
            )}
        </div>
    )
}

Carousel.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
        ]).isRequired,
    width: PropTypes.number
}
export default Carousel
