import PropTypes from 'prop-types'
import styles from './Carousel.module.scss'
import clsx from 'clsx';
import useCarousel from '../../CustomHook/Carousel/Carousel';
import { jump } from '../../CustomHook/Carousel/Store/Actions';

function Carousel({children, width  = 640, translateSize = width, transitionDuration = 300, infinite = true}) {
    const {
        items,
        slide,
        translate,
        activeIndex,
        animationActive,
        dragToSlide,
        jumpTo
    } = useCarousel({children, translateSize, transitionDuration, infinite});

    return (
        <div className={styles['container']} style={{width: `${width}px` }}>
            <div className={styles['carousel-outer']}>
                <div className={styles['carousel-inner']} style={{
                    transform: `translateX(-${translate}px)`,
                    transitionDuration: animationActive ? `${transitionDuration}ms` : '0ms'
                    }}>
                    {slide?.map((item, i) => (
                        <div key={i} 
                            className='item'
                            onMouseDown={dragToSlide}
                        >{item}</div>
                    ))}
                </div>
            </div>
            <div className={styles['controls']}>
                {items?.map((item, i) => (
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
