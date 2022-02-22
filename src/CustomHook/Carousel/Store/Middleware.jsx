import { finishSlide, startSlide } from "./Actions";
import { DRAG, INIT_STATE } from "./Constants";

export const slideAfterware = (action, dispatch, state) => {
    if (action.type !== DRAG && action.type !== INIT_STATE) {
        dispatch(startSlide());
        setTimeout(() => {
            dispatch(finishSlide());
        }, state.transitionDuration)
    }
}
