import { NEXT, PREV, DRAG, DROP, JUMP } from "./Constants";

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