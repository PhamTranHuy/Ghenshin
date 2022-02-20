import { useEffect, useReducer } from 'react'
import { initialState, carouselReducer } from "./Store/Reducer";
import { initItems, initTranslateWidth } from "./Store/Actions";

function useCarousel({children, translateSize}) {
    const [state, dispatch] = useReducer(carouselReducer, initialState);

    useEffect(() => {
        console.log(children);
        const items = [...children];
        dispatch(initItems(items));
    }, [children])

    useEffect(() => {
        dispatch(initTranslateWidth(translateSize));
        console.log(`dispatch item width: ${translateSize}`)
    }, [translateSize])

    return {
        items: state.items,
        translate: state.desired,
        activeIndex: state.activeIndex,
        animationActive: state.animationActive,
        dispatch
    };
}
export default useCarousel
