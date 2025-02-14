import { useEffect } from 'react';
import { useCallback, useLayoutEffect, useRef } from 'react';

const useEvent = <T extends (...args: any[]) => any>(
    handler: T
): ((...args: Parameters<T>) => ReturnType<T>) => {
    const handlerRef = useRef(handler);

    useLayoutEffect(() => {
        handlerRef.current = handler;
    });

    return useCallback((...args: Parameters<T>) => {
        const fn = handlerRef.current;
        return fn(...args);
    }, []);
};

export default useEvent;