import { NEXT, PREV, DRAG, DROP, JUMP, INIT_TRANSLATE_SIZE, INIT_ITEMS } from "./Constants";

export const initItems = payload => {
    return {
        type: INIT_ITEMS,
        payload: payload
    }
}
export const initTranslateSize = payload => {
    return {
        type: INIT_TRANSLATE_SIZE,
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