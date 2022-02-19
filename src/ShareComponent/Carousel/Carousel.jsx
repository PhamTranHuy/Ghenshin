import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Carousel.module.scss'
import useCarousel from '../../CustomHook/Carousel/Carousel';
import { jump } from '../../CustomHook/Carousel/Store/Actions';

function Carousel({children, width}) {
    const [items, setItems] = useState([]);
    const {
        translate,
        dispatch
    } = useCarousel(width);

    useEffect(() => {
        const newItems = [...children];
        setItems(newItems);
    }, [children])

    return (
        <div className={styles['container']} style={{width: `${width}px` }}>
            <div className={styles['carousel-outer']}>
                <div className={styles['carousel-inner']} style={{transform: `translateX(-${translate}px)`}}>
                    {items.map((item, i) => (
                        <div key={i} className={styles['item']} onMouseDown={() => {}} onMouseMove={() => {}}>{item}</div>
                    ))}
                </div>
            </div>
            <div className={styles['controls']}>
                    {items.map((item, i) => (
                        <div key={i} 
                            className={styles['button']}
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
Carousel.defaultProps = {
    width: 640
};
export default Carousel
