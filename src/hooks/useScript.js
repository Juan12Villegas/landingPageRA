// hooks/useScript.js
import { useEffect, useState } from 'react';

function useScript(src) {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => setLoaded(true);
        script.onerror = () => setError(true);

        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, [src]);

    return { loaded, error };
}

export default useScript;
