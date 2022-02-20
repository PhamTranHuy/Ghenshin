import { useEffect, useReducer } from 'react'
import { initialState, carouselReducer } from "./Store/Reducer";

function useCarousel() {
    const [state, dispatch] = useReducer(carouselReducer, initialState);
    return {
        translate: state.desired,
        activeIndex: state.activeIndex,
        dispatch
    };
}
export default useCarousel
