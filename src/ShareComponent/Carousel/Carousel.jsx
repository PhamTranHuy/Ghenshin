import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Carousel.module.scss'
import useCarousel from '../../CustomHook/Carousel/Carousel';

function Carousel({children, width}) {
    const carouselInner = useRef();
    const {
        translate, 
        currentIndex,
        items,
        handleMouseDown, 
        handleMouseMove, 
        setTransStyle,
        handleSwitchButtonClicked
    } = useCarousel({children, width, carouselInner});
    return (
        <div className={styles['container']} style={{width: `${width}px` }}>
            <div className={styles['carousel-outer']}>
                <div className={styles['carousel-inner']} ref={carouselInner} style={setTransStyle(translate)}>
                    {items.map((item, i) => (
                        <div key={i} className={styles['item']} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove}>{item}</div>
                    ))}
                </div>
            </div>
            <div className={styles['controls']}>
                    {children.map((item, i) => (
                        <div key={i} 
                            className={
                                `${styles['button']} 
                                ${currentIndex === (i + 1) ? styles['is-active'] : ''}`
                            } 
                            onClick={() => { handleSwitchButtonClicked(i + 1) }}/>
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
