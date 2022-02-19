import { useEffect, useReducer } from 'react'
import { initialState, carouselReducer } from "./Store/Reducer";

function useCarousel({ items, width, infinite, smoothTransDuration, autoTransTime}) {
    const [state, dispatch] = useReducer(carouselReducer, initialState);

    return {
        ...state,
        dispatch
    };
}
export default useCarousel
