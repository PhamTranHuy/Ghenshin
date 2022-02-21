import { useEffect, useReducer, useCallback } from 'react'
import { initialState, carouselReducer } from "./Store/Reducer";
import { initItems, initTranslateSize, drag } from "./Store/Actions";

function useCarousel({children, translateSize}) {
    const [state, dispatch] = useReducer(carouselReducer, initialState);
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
    useEffect(() => {
        console.log(children);
        const items = [...children];
        dispatch(initItems(items));
    }, [children])

    useEffect(() => {
        dispatch(initTranslateSize(translateSize));
        console.log(`dispatch item width: ${translateSize}`)
    }, [translateSize])

    return {
        items: state.items,
        translate: state.desired,
        activeIndex: state.activeIndex,
        animationActive: state.animationActive,
        dragToSlide: handleMouseDown,
        dispatch
    };
}
export default useCarousel
