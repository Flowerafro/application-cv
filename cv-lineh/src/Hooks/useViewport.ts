import { useEffect, useState } from 'react';

export function useViewport() {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const check = () => setIsDesktop(window.innerWidth > 900);

        check();

        let timeoutId: ReturnType<typeof setTimeout>;

        const debouncedCheck = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(check, 200);
        };

        window.addEventListener('resize', debouncedCheck);

        return () => {
            window.removeEventListener('resize', debouncedCheck);
            clearTimeout(timeoutId);
        };
    }, []);

    return { isDesktop };
}

export default useViewport;
