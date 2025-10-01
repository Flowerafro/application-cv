import { useEffect, useState } from 'react';

// rotating images for modul of interests, based on index and interval
// if user prefers reduced motion, do not rotate - redused motion  

export function useRotatingImages(images?: { src: string }[], enabled = true, intervalMs = 3000) {
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
