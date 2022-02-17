import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types';

function useNonInitialEffect(effect, deps) {
    const initialRender = useRef(true);
    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
        }  else {
			effect();
		}
    }, deps)
}
useNonInitialEffect.propTypes = {
    effect: PropTypes.func.isRequired,
    deps: PropTypes.array
}
export default useNonInitialEffect;
