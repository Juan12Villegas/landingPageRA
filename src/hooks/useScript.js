import { useEffect, useState } from 'react';

function useScript(src) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => setLoaded(true);
        script.onerror = () => setLoaded(false);

        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, [src]);

    return loaded;
}

export default useScript;
