import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Carousel.module.scss'

function Carousel({children, width}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [translate, setTranslate] = useState(0);
    
    const handleSwitchButtonClicked = (index) => {
        setActiveIndex(index);
        setTranslate(-(width * index));
    }
    return (
        <div className={styles['container']} style={{width: `${width}px` }}>
            <div className={styles['carousel-outer']}>
                <div className={styles['carousel-inner']} style={{transform: `translateX(${translate}px)`}}>
                    {children.map((item, i) => (
                        <div key={i} className={styles['item']}>{item}</div>
                    ))}
                </div>
            </div>
            <div className={styles['controls']}>
                    {children.map((item, i) => (
                        <div key={i} 
                            className={
                                `${styles['button']} ${activeIndex === i ? styles['is-active'] : ''}`
                            } 
                            onClick={() => { handleSwitchButtonClicked(i) }}/>
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
    width: PropTypes.string
}
Carousel.defaultProps = {
    width: '640'
  };
export default Carousel

