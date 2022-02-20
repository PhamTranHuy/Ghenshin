import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Carousel.module.scss'
import clsx from 'clsx';
import useCarousel from '../../CustomHook/Carousel/Carousel';
import { jump, initTranslateWidth} from '../../CustomHook/Carousel/Store/Actions';

function Carousel({children, width  = 640, translateSize = width, transitionDuration = 600}) {
    const [items, setItems] = useState([]);
    const {
        translate,
        activeIndex,
        animationActive,
        dispatch
    } = useCarousel(translateSize);

    useEffect(() => {
        const newItems = [...children];
        setItems(newItems);
    }, [children])

    useEffect(() => {
        dispatch(initTranslateWidth(translateSize));
        console.log(`dispatch item width: ${translateSize}`)
    }, [translateSize, width])

    return (
        <div className={styles['container']} style={{width: `${width}px` }}>
            <div className={styles['carousel-outer']}>
                <div className={styles['carousel-inner']} style={{
                    transform: `translateX(-${translate}px)`,
                    transitionDuration: animationActive ? `${transitionDuration}ms` : '0ms'
                    }}>
                    {items.map((item, i) => (
                        <div key={i} 
                            className='item'
                            onMouseDown={() => {}} 
                            onMouseMove={() => {}}>{item}</div>
                    ))}
                </div>
            </div>
            <div className={styles['controls']}>
                    {items.map((item, i) => (
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
