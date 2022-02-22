import { NEXT, PREV, DRAG, DROP, JUMP, INIT_STATE, START_SLIDE, FINISH_SLIDE } from "./Constants";

export const initialState = {
    translateSize: 0,
    translate: 0,
    desired: null,
    activeIndex: 0,
    animationActive: false,
    transitionDuration: 0,
    itemsTranslateCoordinates: []
}

export const carouselReducer = (state, action) => {
    let newState = {};
    switch (action.type) {
        case INIT_STATE:
            (() => {
                console.log("init-state")
                newState = {
                    ...state, 
                    ...action.payload
                }
            })()
            break;
        case NEXT:
                //...
        case PREV:
            //...
        case DRAG:
            (() => {
                const translate = state.translate - action.payload.movementX;
                newState = {
                    ...state,
                    translate,
                    animationActive: false
                }
            })()
            break;
        case DROP:
            (() => {
                newState = {
                    ...state,
                    desired: 0
                }
            })()
            break;
        case JUMP:
            (() => {
                const activeIndex = action.payload;
                const desired = activeIndex * state.translateSize;
                newState = {
                    ...state,
                    desired,
                    activeIndex
                }
            })()
            break;
        case START_SLIDE:
            (() => {
                console.log("start slide")
                newState = {
                    ...state,
                    animationActive: true,
                    translate: state.desired
                }
            })();
            break;
        case FINISH_SLIDE:
            (() => {
                newState = {
                    ...state,
                    animationActive: false,
                    desired: null
                }
                console.log(`finish slide: ${state.transitionDuration}`);
            })()
            break;
        default:
            return {...state}
    }
    return newState;
}