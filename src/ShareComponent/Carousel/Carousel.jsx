import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Carousel.module.scss'

function Carousel({children, width}) {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [items, setItems] = useState([]);
    const [translate, setTranslate] = useState(width * currentIndex);
    const [dragAble, setDragAble] = useState(false);
    const [itemsTranslate, setItemsTranslate] = useState([]);
    const [animation, setAnimation] = useState(true);
    const carouselInner = useRef();
    
    useEffect(() => {
        const carouselItems = [children[children.length-1], ...children, children[0]];
        setItems(carouselItems);
        const itemsTranslate = carouselItems.map((item, index) => (index * width));
        setItemsTranslate(itemsTranslate);
        // setTranslate(width * currentIndex);
    }, [children, width])

    useEffect(() => {
        setTranslate(width * currentIndex);
    }, [currentIndex])

    const handleSwitchButtonClicked = (index) => {
        setAnimation(true);
        setCurrentIndex(index);
        setTranslate(width * index);
    }
    const handleMouseDown = (e) => {
        e.preventDefault();
        document.addEventListener('mouseup', handleMouseUp);
        setDragAble(true);
        setAnimation(false);
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
        setAnimation(true);
        document.removeEventListener('mouseup', handleMouseUp);
        // If you’re using React hooks in a component with an event listener, your event listener callback cannot access the latest state
        // So i used ref to catch latest translate from carousel inner
        const translate = carouselInner.current.style.transform.match(/[0-9]/g).join('');
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

        const nearlyItemTranslate = (() => {
            return (translate - leftItemTranslate >= rightItemTranslate - translate) ? rightItemTranslate : leftItemTranslate;
        })();
        const setIndexMatchTranslateItem = (translate, itemsTranslate) => {
            for (let index in itemsTranslate) {
                if (translate === itemsTranslate[index]) {
                    setCurrentIndex(Number(index));
                    setTimeout(() => {
                        transToRealItem(Number(index));
                    }, 300);
                } 
            }
        }
        
        setTranslate(nearlyItemTranslate);
        setIndexMatchTranslateItem(nearlyItemTranslate, itemsTranslate);
    }
    const transToRealItem = (index) => {
        if (index === 0) {
            setAnimation(false);
            setCurrentIndex(items.length - 2);
        } else if (index === (items.length - 1)) {
            setAnimation(false);
            setCurrentIndex(1);
        }
    }

    const setTransStyle = (translate) => {
        const transform = {
            transform: `translateX(${-translate}px)`
        };
        const transition = {
            transition: `0.3s ease-out`
        }
        return animation ? {...transform, ...transition} : transform; 
    }
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
                                `${styles['button']} ${currentIndex === (i + 1) ? styles['is-active'] : ''}`
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
    width: PropTypes.string
}
Carousel.defaultProps = {
    width: '640'
};
export default Carousel
