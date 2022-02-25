import { useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './Carousel.module.scss'
import clsx from 'clsx';
import useCarousel from '../../CustomHook/Carousel/Carousel';

function Carousel({children, width = 640, translateSize = width, infinite = true, autoSlideTime = 0}) {
    const {
        slide,
        activeIndex,
        dragToSlide,
        jumpTo,
        style
    } = useCarousel({children, translateSize, infinite});
    useEffect(() => {
        if (autoSlideTime) {
            const timer = setTimeout(() => {
                jumpTo(activeIndex + 1);
            }, autoSlideTime)
            return () => {
                clearTimeout(timer);
            }
        }
    }, [autoSlideTime, activeIndex])
    return (
        <div className={styles['container']} style={{width: `${width}px` }}>
            <div className={styles['carousel-outer']}>
                <div className={styles['carousel-inner']} style={style}>
                    {slide?.map((item, i) => (
                        <div key={i} 
                            className='item'
                            onMouseDown={dragToSlide}
                        >{item}</div>
                    ))}
                </div>
            </div>
            <div className={styles['controls']}>
                {children?.map((item, i) => (
                    <div key={i} 
                        className={clsx(styles['button'], activeIndex === i && styles["is-active"])}
                        onClick={() => {jumpTo(i)}}/>
                ))}
            </div>
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
