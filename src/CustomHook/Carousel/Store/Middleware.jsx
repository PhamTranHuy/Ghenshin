import { finishSlide, startSlide } from "./Actions";
import { DRAG, INIT_STATE, TRANS_DURATION } from "./Constants";

export const slideAfterware = (action, dispatch) => {
    if (action.type !== DRAG && action.type !== INIT_STATE) {
        dispatch(startSlide());
        setTimeout(() => {
            dispatch(finishSlide());
        }, TRANS_DURATION)
    }
}
