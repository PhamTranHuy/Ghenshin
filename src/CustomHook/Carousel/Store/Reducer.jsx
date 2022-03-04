import { NEXT, PREV, DRAG, DROP, JUMP, INIT_STATE, START_SLIDE, FINISH_SLIDE } from "./Constants";

export const initialState = {
    items: [],
    slide: [],
    translateSize: 0,
    translate: 0,
    desired: null,
    activeIndex: 0,
    animationActive: false,
    transitionDuration: 0,
    slideCoordTemp: {},
    infinite: false
}

export const carouselReducer = (state, action) => {
    let newState = {};
    switch (action.type) {
        case INIT_STATE:
            (() => {
                const { children: items, translateSize, transitionDuration, infinite } = action.payload;
                let slide, translate;

                // set initial translate coord and slide frame
                if (infinite) {
                    slide = [items[items.length-1], ...items, items[0]];
                    translate = (translateSize * state.activeIndex) + translateSize;
                } else {
                    slide = [...items];
                    translate = state.activeIndex * translateSize;
                }

                // set slide coord obj with key = transition coord and value = index
                let slideCoordTemp = {}
                slide.forEach((item, index) => {
                    slideCoordTemp[translateSize * index] = infinite ? index - 1 : index;
                });

                newState = {
                    ...state, 
                    items,
                    slide,
                    translate,
                    translateSize,
                    transitionDuration,
                    slideCoordTemp,
                    infinite
                }
            })()
            break;
        case DRAG:
            (() => {
                let translate = state.translate - action.payload.movementX;
                const transCoords = Object.keys(state.slideCoordTemp);
                const lastTrans = transCoords[transCoords.length - 1];
                if (translate > lastTrans) {
                    translate = lastTrans;
                }
                newState = {
                    ...state,
                    animationActive: false,
                    translate
                }
            })()
            break;
        case DROP:
            (() => {
                const closedCoord = Object.keys(state.slideCoordTemp).reduce((a, b) => {
                    return Math.abs(b - state.translate) < Math.abs(a - state.translate) ? b : a;
                })
                let slideIndex = state.slideCoordTemp[closedCoord];
                let activeIndex = slideIndex;
                if (slideIndex === -1) {
                    activeIndex = state.items.length - 1;
                } else if ( slideIndex === state.items.length) {
                    activeIndex = 0;
                }
                newState = {
                    ...state,
                    activeIndex,
                    desired: closedCoord
                }
            })()
            break;
        case JUMP:
            (() => {
                let desired;
                let activeIndex = action.payload;
                let slideIndex = activeIndex;
                if (slideIndex === -1) {
                    activeIndex = state.items.length - 1;
                } else if ( slideIndex === state.items.length) {
                    activeIndex = 0;
                }
                const transCoords = Object.keys(state.slideCoordTemp);
                if (state.infinite) {
                    for (let i = 0; i < transCoords.length; i++) {
                        const transCoordIndex = state.slideCoordTemp[transCoords[i]];
                        if (transCoordIndex === slideIndex) {
                            desired = transCoords[i];
                            break;
                        }
                    }
                } else {
                    desired = transCoords[activeIndex];
                }
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
                let translate = state.translate;
                if (state.infinite) {
                    const slideIndex = state.slideCoordTemp[state.translate];
                    const transCoords = Object.keys(state.slideCoordTemp);
                    if (slideIndex === -1) {
                        translate = transCoords[transCoords.length - 2];
                    } else if ( slideIndex === state.items.length) {
                        translate = transCoords[1];
                    }
                }
                newState = {
                    ...state,
                    translate,
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