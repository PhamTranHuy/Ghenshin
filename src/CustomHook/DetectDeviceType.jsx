import { useState, useEffect, useMemo } from 'react'
function useDetectDeviceType() {
    const [currentDeviceType, setCurrentDeviceType] = useState(null);
    const DEVICE_TYPES = useMemo(() => ({
        TABLET: 'tablet',
        MOBILE: 'mobile',
        DESKTOP: 'desktop'
    }), [])

    useEffect(() => {
        const ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            return setCurrentDeviceType(DEVICE_TYPES.TABLET);
        }
        else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
            return setCurrentDeviceType(DEVICE_TYPES.MOBILE);
        }
        return setCurrentDeviceType(DEVICE_TYPES.DESKTOP);
    }, [DEVICE_TYPES]);

    return [currentDeviceType, DEVICE_TYPES];
}

export default useDetectDeviceType