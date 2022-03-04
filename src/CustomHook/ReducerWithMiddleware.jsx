import { useReducer, useRef, useEffect } from "react";

function useReducerWithMiddleware(reducer, initialState, middlewareFns, afterwareFns) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const actionRef = useRef();

    const dispatchWithMiddleWare = (action) => {
        actionRef.current = action;
        middlewareFns.forEach((middlewareFn) => middlewareFn(action, dispatch, state));
        dispatch(action);
    }
    useEffect(() => {
        if (!actionRef.current) return;
        afterwareFns.forEach((afterwareFn) => afterwareFn(actionRef.current, dispatch, state));
        actionRef.current = null;
    }, [state])

    return [state, dispatchWithMiddleWare];
}

export default useReducerWithMiddleware