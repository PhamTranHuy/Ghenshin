import { NEXT, PREV, DRAG, DROP, JUMP, INIT_TRANSLATE_SIZE } from "./Constants";

export const initialState = {
    translateWidth: 0,
    desired: 0,
    activeIndex: 0,
    animationActive: true
}
export const carouselReducer = (state, action) => {
    let newState = {};
    switch (action.type) {
        case INIT_TRANSLATE_SIZE: 
            (() => {
                const desired = state.activeIndex * action.payload;
                console.log(`INITIAL_WIDTH: desired:${desired}, width: ${action.payload}`);
                newState = {
                    ...state,
                    width: action.payload,
                    desired
                }
            })()
            break;
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
            console.log(`JUMP: ${desired}`)
            newState = {
                ...state,
                desired,
                activeIndex
            }
            break;
        default:
            return {...state}
    }
    return newState;
}