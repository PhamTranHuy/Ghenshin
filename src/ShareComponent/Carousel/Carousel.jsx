import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Carousel.module.scss'
import useCarousel from '../../CustomHook/Carousel/Carousel';

function Carousel({children, width}) {
    const carouselInner = useRef();
    const [items, setItems] = useState([]);
    const {
        dispatch
    } = useCarousel({children, width});

    useEffect(() => {
        const newItems = [...children];
        setItems(newItems);
    }, [children, width])

    return (
        <div className={styles['container']} style={{width: `${width}px` }}>
            <div className={styles['carousel-outer']}>
                <div className={styles['carousel-inner']} ref={carouselInner} style={{}}>
                    {items.map((item, i) => (
                        <div key={i} className={styles['item']} onMouseDown={() => {}} onMouseMove={() => {}}>{item}</div>
                    ))}
                </div>
            </div>
            <div className={styles['controls']}>
                    {children.map((item, i) => (
                        <div key={i} 
                            className={styles['button']}
                            onClick={() => {}}/>
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
