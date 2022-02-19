import React, { useEffect, useRef, useState } from 'react'

function useCarousel({ children, width, carouselInner}) {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [items, setItems] = useState([]);
    const [translate, setTranslate] = useState(width * currentIndex);
    const [dragAble, setDragAble] = useState(false);
    const [itemsTranslate, setItemsTranslate] = useState([]);
    const [animation, setAnimation] = useState(true);

    useEffect(() => {
        // set two fake item into the start and the end of carousel to make it infinitely 
        const carouselItems = [children[children.length-1], ...children, children[0]];
        setItems(carouselItems);
        const itemsTranslate = carouselItems.map((item, index) => (index * width));
        setItemsTranslate(itemsTranslate);
        setTranslate(width);
    }, [children, width])

    const handleSwitchButtonClicked = (index) => {
        setAnimation(true);
        setCurrentIndex(index);
        setTranslate(width * index);
    }

    // touching and drag carousel
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

        const nearlyItemTranslate = (translate - leftItemTranslate >= rightItemTranslate - translate) ? rightItemTranslate : leftItemTranslate;

        const setIndexMatchTranslateItem = (translate, itemsTranslate) => {
            const transToRealItem = (index) => {
                setTimeout(() => {
                    setAnimation(false);
                    setTranslate(index * width);
                }, 300)
            }

            let currentIndex;
            for (let index in itemsTranslate) {
                if (translate === itemsTranslate[index]) {
                    currentIndex = Number(index);
                    if (currentIndex === 0) {
                        currentIndex = items.length - 2;
                        transToRealItem(currentIndex);
                    } else if (currentIndex === (items.length - 1)) {
                        currentIndex = 1
                        transToRealItem(currentIndex);
                    }
                    setCurrentIndex(currentIndex);
                }
            }
        }
        
        setTranslate(nearlyItemTranslate);
        setIndexMatchTranslateItem(nearlyItemTranslate, itemsTranslate);
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
    return {
        currentIndex,
        translate,
        items,
        handleMouseDown,
        handleMouseMove,
        setTransStyle,
        handleSwitchButtonClicked
    }
}

export default useCarousel
