import { NEXT, PREV, DRAG, DROP, JUMP, INIT_STATE, START_SLIDE, FINISH_SLIDE } from "./Constants";

export const initialState = {
    translateSize: 0,
    translate: 0,
    desired: null,
    activeIndex: 0,
    animationActive: false,
    transitionDuration: 0,
    itemsTranslateCoord: []
}

export const carouselReducer = (state, action) => {
    let newState = {};
    switch (action.type) {
        case INIT_STATE:
            (() => {
                const itemsTranslateCoord = action.payload.items.map((item, index) => {
                    return action.payload.translateSize * index;
                })
                newState = {
                    ...state, 
                    ...action.payload,
                    itemsTranslateCoord
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
                    animationActive: false,
                    translate
                }
            })()
            break;
        case DROP:
            (() => {
                const closedCoord = state.itemsTranslateCoord.reduce((a, b) => {
                    return Math.abs(b - state.translate) < Math.abs(a - state.translate) ? b : a;
                })
                const activeIndex = state.itemsTranslateCoord.indexOf(closedCoord);
                newState = {
                    ...state,
                    activeIndex,
                    desired: closedCoord
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
            })()
            break;
        default:
            return {...state}
    }
    return newState;
}