import PropTypes from 'prop-types'
import styles from './Carousel.module.scss'
import clsx from 'clsx';
import useCarousel from '../../CustomHook/Carousel/Carousel';
import { jump, drag } from '../../CustomHook/Carousel/Store/Actions';
import { useCallback } from 'react';

function Carousel({children, width  = 640, translateSize = width, transitionDuration = 600, infinity = true}) {
    const {
        items,
        translate,
        activeIndex,
        animationActive,
        dispatch
    } = useCarousel({children, translateSize});

    const handleMouseMove = useCallback((e) => {
        dispatch(drag(e))
    }, []);
    const handleMouseDown = (e) => {
        console.log('add mouse move');
        e.preventDefault();
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    }
    const handleMouseUp = (e) => {
        console.log('remove mouse move')
        e.preventDefault();
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
    }
    return (
        <div className={styles['container']} style={{width: `${width}px` }}>
            <div className={styles['carousel-outer']}>
                <div className={styles['carousel-inner']} style={{
                    transform: `translateX(-${translate}px)`,
                    transitionDuration: animationActive ? `${transitionDuration}ms` : '0ms'
                    }}>
                    {items?.map((item, i) => (
                        <div key={i} 
                            className='item'
                            onMouseDown={handleMouseDown}
                        >{item}</div>
                    ))}
                </div>
            </div>
            <div className={styles['controls']}>
                    {items?.map((item, i) => (
                        <div key={i} 
                            className={clsx(styles['button'], activeIndex === i && styles["is-active"])}
                            onClick={() => {dispatch(jump(i))}}/>
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
