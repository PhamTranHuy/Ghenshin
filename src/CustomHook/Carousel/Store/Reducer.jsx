import { NEXT, PREV, DRAG, DROP, JUMP } from "./Constants";

export const initialState = {
    translate: 0,
    desired: 0,
    activeIndex: 0,
}
export const carouselReducer = (initialState, action) => {
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
            //...
        default:
            return {...initialState}
    }
}