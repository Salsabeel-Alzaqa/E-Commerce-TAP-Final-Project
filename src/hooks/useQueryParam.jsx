import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useQueryParam(paramName, initialValue) {
    let location = useLocation().search;
    const initialParams = new URLSearchParams(location);
    const initialParamValue = initialParams.get(paramName) || initialValue;
    const [paramValue, setParamValue] = useState(initialParamValue);

    // Update URL
    useEffect(() => {
        const newURL = new URL(window.location);
        const searchParams = newURL.searchParams;
        searchParams.set(paramName, paramValue);
        window.history.pushState({}, '', newURL);
    }, [paramValue, paramName]);

    const updateParamValue = (value) => {
        setParamValue(value);
    };

    return [paramValue, updateParamValue];
}