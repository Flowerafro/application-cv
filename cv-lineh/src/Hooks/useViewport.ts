import { useEffect, useState } from 'react';

// Hook to determine if the viewport is desktop size, then the hover effects can be enabled on toolItems

export function useViewport() {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const check = () => setIsDesktop(window.innerWidth > 900);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    return { isDesktop };
}

export default useViewport;
