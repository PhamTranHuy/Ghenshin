import { useReducer, useRef, useEffect, useCallback } from "react";

function useReducerWithMiddleware(reducer, initialState, middlewareFns, afterwareFns) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const actionRef = useRef();

    const dispatchWithMiddleWare = useCallback((action) => {
        actionRef.current = action;
        middlewareFns.forEach((middlewareFn) => middlewareFn(action, dispatch));
        dispatch(action);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        if (actionRef.current) {
            afterwareFns.map((afterwareFn) => afterwareFn(actionRef.current, dispatch, state));
            actionRef.current = null;
        }
    }, [state, afterwareFns])

    return [state, dispatchWithMiddleWare];
}

export default useReducerWithMiddleware
