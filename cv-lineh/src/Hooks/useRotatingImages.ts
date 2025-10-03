import { useEffect, useState } from 'react';

// image rotation hook on loop

export function useRotatingImages(images?: { src: string }[], enabled = true, intervalMs = 2000) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (!enabled || !images || images.length === 0) return;

        const id = setInterval(() => {
            setIndex((i) => (i + 1) % images.length);
        }, intervalMs);

        return () => clearInterval(id);
    }, [images, enabled, intervalMs]);

    return index;
}

export default useRotatingImages;
