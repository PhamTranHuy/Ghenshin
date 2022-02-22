import { useEffect, useCallback } from 'react'
import { initialState, carouselReducer } from "./Store/Reducer";
import { initState, drag, drop } from "./Store/Actions";
import useReducerWithMiddleware from '../ReducerWithMiddleware';
import { slideAfterware } from './Store/Middleware';

function useCarousel({children, translateSize, transitionDuration}) {
    const [state, dispatch] = useReducerWithMiddleware(carouselReducer, initialState, [], [slideAfterware]);

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
        console.log('remove mouse move');
        e.preventDefault();
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        dispatch(drop());
    }

    useEffect(() => {
        const items = [...children];
        dispatch(initState({items, translateSize, transitionDuration}));
    }, [children, translateSize, transitionDuration])

    return {
        items: state.items,
        translate: state.translate,
        activeIndex: state.activeIndex,
        animationActive: state.animationActive,
        dragToSlide: handleMouseDown,
        dispatch
    };
}
export default useCarousel
