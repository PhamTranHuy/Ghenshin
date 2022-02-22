import { NEXT, PREV, DRAG, DROP, JUMP, INIT_STATE, START_SLIDE, FINISH_SLIDE } from "./Constants";

export const initState = payload => {
    return {
        type: INIT_STATE,
        payload: payload
    }
}

export const next = payload => {
    return {
        type: NEXT,
        payload: payload
    }
}

export const prev = payload => {
    return {
        type: PREV,
        payload
    }
}

export const drag = payload => {
    return {
        type: DRAG,
        payload
    }
}

export const drop = payload => {
    return {
        type: DROP,
        payload
    }
}

export const jump = payload => {
    return {
        type: JUMP,
        payload
    }
}

export const startSlide = payload => {
    return {
        type: START_SLIDE,
        payload
    }
}

export const finishSlide = payload => {
    return {
        type: FINISH_SLIDE,
        payload
    }
}