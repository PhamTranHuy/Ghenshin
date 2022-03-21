import { finishSlide, startSlide } from "./Actions";
import { DRAG, INIT_STATE, START_SLIDE, TRANS_DURATION } from "./Constants";

export const slideAfterware = (action, dispatch, state) => {
    if (action.type !== DRAG && action.type !== INIT_STATE && action.type !== START_SLIDE) {
        dispatch(startSlide());
        const timer = setTimeout(() => {
            dispatch(finishSlide());
        }, TRANS_DURATION)
        return () => {
            clearTimeout(timer);
        }
    }
}
