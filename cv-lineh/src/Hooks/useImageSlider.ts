import { useState } from "react";

// useImageSlider.ts
export function useImageSlider(images?: { src: string }[]) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        if (!images || images.length === 0) return;
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        if (!images || images.length === 0) return;
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToImage = (index: number) => {
        if (!images || index < 0 || index >= images.length) return;
        setCurrentIndex(index);
    };

    return {
        currentIndex,
        currentImage: images?.[currentIndex],
        nextImage,
        prevImage,
        goToImage,
        hasMultipleImages: (images?.length || 0) > 1
    };
}