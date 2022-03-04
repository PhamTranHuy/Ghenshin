import { useEffect, useCallback, useState } from 'react'
import { initialState, carouselReducer } from "./Store/Reducer";
import { initState, drag, drop, jump } from "./Store/Actions";
import useReducerWithMiddleware from '../ReducerWithMiddleware';
import { slideAfterware } from './Store/Middleware';
import { TRANS_DURATION } from './Store/Constants';

function useCarousel({children, translateSize, infinite}) {
    const [state, dispatch] = useReducerWithMiddleware(carouselReducer, initialState, [], [slideAfterware]);
    const [style, setStyle] = useState({});

    const handleMouseMove = useCallback((e) => {
        dispatch(drag(e))
    }, []);
    const handleMouseDown = (e) => {
        e.preventDefault();
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    }
    const handleMouseUp = (e) => {
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
        dispatch(initState({children, translateSize, infinite}));
    }, [children, translateSize, infinite])

    useEffect(() => {
        setStyle({
            transform: `translateX(-${state.translate}px)`,
            transitionDuration: state.animationActive ? `${TRANS_DURATION}ms` : '0ms'
            })
    }, [state.translate, state.animationActive])

    return {
        slide: state.slide,
        activeIndex: state.activeIndex,
        style,
        dragToSlide: handleMouseDown,
        next,
        prev,
        jumpTo
    };
}
export default useCarousel
