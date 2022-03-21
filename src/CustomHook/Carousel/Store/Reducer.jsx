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
                let { children: items, translateSize, transitionDuration, infinite, slidesPerView } = action.payload;
                if(slidesPerView > 1) {
                    infinite = false;
                }

                // set initial translate coord and slide frame
                let slide;
                if (infinite) {
                    slide = [items[items.length-1], ...items, items[0]];
                } else {
                    slide = [...items];
                }

                // set slide coord obj with key = transition coord and value = index
                let slideCoordTemp = {}
                slide.forEach((item, index) => {
                    if (infinite) {
                        const slideIndex = index - 1;
                        slideCoordTemp[slideIndex] = translateSize * index;
                    } else {
                        const slideIndex = index;
                        if (index < slidesPerView) {
                            slideCoordTemp[slideIndex] = 0;
                        } else if (index >= slide.length - slidesPerView) {
                            slideCoordTemp[slideIndex] = translateSize * (slide.length - slidesPerView * 2);
                        } else {
                            slideCoordTemp[slideIndex] = translateSize * (index - slidesPerView + 1);
                        }
                    }
                });
                const translate = slideCoordTemp[state.activeIndex];

                newState = {
                    ...state, 
                    items,
                    slide,
                    translate,
                    translateSize,
                    transitionDuration,
                    slideCoordTemp,
                    infinite,
                    slidesPerView
                }
            })()
            break;
        case DRAG:
            (() => {
                let translate = state.translate - action.payload.movementX;
                const transCoords = Object.values(state.slideCoordTemp).sort((a, b) => a - b);
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
                const transCoords = Object.values(state.slideCoordTemp).sort((a, b) => a - b);
                const slidesIndexArr = Object.keys(state.slideCoordTemp).sort((a, b) => a - b);
                const closedCoord = transCoords.reduce((a, b) => {
                    return Math.abs(b - state.translate) < Math.abs(a - state.translate) ? b : a;
                })
                let slideIndex = Number(slidesIndexArr[transCoords.indexOf(closedCoord)]);
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
                if (state.infinite) {
                    desired = state.slideCoordTemp[slideIndex];
                } else {
                    desired = state.slideCoordTemp[activeIndex];
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
                    const transCoords = Object.values(state.slideCoordTemp).sort((a, b) => a - b);
                    const slidesIndexArr = Object.keys(state.slideCoordTemp).sort((a, b) => a - b);
                    const slideIndex = Number(slidesIndexArr[transCoords.indexOf(translate)]);
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