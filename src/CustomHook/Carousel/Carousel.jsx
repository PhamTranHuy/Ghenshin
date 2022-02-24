import { useEffect, useCallback } from 'react'
import { initialState, carouselReducer } from "./Store/Reducer";
import { initState, drag, drop, jump } from "./Store/Actions";
import useReducerWithMiddleware from '../ReducerWithMiddleware';
import { slideAfterware } from './Store/Middleware';

function useCarousel({children, translateSize, transitionDuration, infinite}) {
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

    const next = () => {
        dispatch(jump(state.activeIndex + 1));
    }
    const prev = () => {
        dispatch(jump(state.activeIndex - 1));
    }
    const jumpTo = (index) => {
        dispatch(jump(index));
    }
    useEffect(() => {
        dispatch(initState({children, translateSize, transitionDuration, infinite}));
    }, [children, translateSize, transitionDuration, infinite])

    return {
        items: state.items,
        slide: state.slide,
        translate: state.translate,
        activeIndex: state.activeIndex,
        animationActive: state.animationActive,
        dragToSlide: handleMouseDown,
        next,
        prev,
        jumpTo
    };
}
export default useCarousel
