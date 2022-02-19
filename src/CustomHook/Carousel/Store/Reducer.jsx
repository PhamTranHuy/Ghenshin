import { NEXT, PREV, DRAG, DROP, JUMP } from "./Constants";

export const initialState = {
    width: 0,
    desired: 0,
    activeIndex: 0,
}
export const carouselReducer = (state, action) => {
    switch (action.type) {
        case NEXT:
                //...
        case PREV:
            //...
        case DRAG:
            //...
        case DROP:
            //...
        case JUMP:
            const desired = action.payload * state.width;
            const activeIndex = action.payload;
            const newState = {
                ...state,
                desired,
                activeIndex
            }
            console.log (newState);
            return newState
        default:
            return {...state}
    }
}