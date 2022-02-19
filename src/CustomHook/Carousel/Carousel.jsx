import { useEffect, useReducer } from 'react'
import { initialState, carouselReducer } from "./Store/Reducer";

function useCarousel(width) {
    const [state, dispatch] = useReducer(carouselReducer, initialState);
    console.log(`carouselHook: ${width}`)
    return {
        translate: state.desired,
        dispatch
    };
}
export default useCarousel
