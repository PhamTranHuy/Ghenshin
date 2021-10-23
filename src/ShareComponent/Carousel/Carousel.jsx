import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Carousel.module.scss'

function Carousel({children, width}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [translate, setTranslate] = useState(0);
    const [dragAble, setDragAble] = useState(false);
    const [itemsTranslate, setItemsTranslate] = useState([]);
    const carouselInner = useRef();
    
    useEffect(() => {
        const items = [...children];
        const itemsTranslate = items.map((item, index) => (index * width));
        setItemsTranslate(itemsTranslate);
    }, [children, width])

    const handleSwitchButtonClicked = (index) => {
        setCurrentIndex(index);
        setTranslate(width * index);
    }
    const handleMouseDown = (e) => {
        e.preventDefault();
        document.addEventListener('mouseup', handleMouseUp);
        setDragAble(true);
    }
    const handleMouseMove = (e) => {
        e.preventDefault();
        if (!dragAble) {
            return;
        }
        const newTrans = translate - e.movementX;
        setTranslate(newTrans);
    }
    const handleMouseUp = (e) => {
        e.preventDefault();
        setDragAble(false);
        document.removeEventListener('mouseup', handleMouseUp);
        // If you’re using React hooks in a component with an event listener, your event listener callback cannot access the latest state
        // So i used ref to catch latest translate from carousel inner
        const translate = carouselInner.current.style.transform.match(/[0-9]/g).join('');
        console.log(translate);
        autoTranslateToNearlyItem(translate, itemsTranslate);
    }
    const autoTranslateToNearlyItem = (translate, itemsTranslate) => {
        let leftItemTranslate;
        let rightItemTranslate;
        for (let itemTrans of itemsTranslate) {
            if (itemTrans <= translate) {
                leftItemTranslate = itemTrans;
            } else {
                rightItemTranslate = itemTrans;
                break;
            }
        }
        const nearlyItemTranslate = ((leftItemTranslate, rightItemTranslate) => {
            return translate - leftItemTranslate >= rightItemTranslate - translate ? rightItemTranslate : leftItemTranslate;
        })(leftItemTranslate, rightItemTranslate);
        setTranslate(nearlyItemTranslate);
    }
    return (
        <div className={styles['container']} style={{width: `${width}px` }}>
            <div className={styles['carousel-outer']}>
                <div className={styles['carousel-inner']} ref={carouselInner} style={{transform: `translateX(${-translate}px)`}}>
                    {children.map((item, i) => (
                        <div key={i} className={styles['item']} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove}>{item}</div>
                    ))}
                </div>
            </div>
            <div className={styles['controls']}>
                    {children.map((item, i) => (
                        <div key={i} 
                            className={
                                `${styles['button']} ${currentIndex === i ? styles['is-active'] : ''}`
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
