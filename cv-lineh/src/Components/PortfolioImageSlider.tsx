import { useImageSlider } from '../Hooks/useImageSlider';
import type { PortfolioImages } from '../Types';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

interface PortfolioImageSliderProps {
    images: PortfolioImages[];
    projectTitle: string;
}

export default function PortfolioImageSlider({ images, projectTitle }: PortfolioImageSliderProps) {
    // Convert PortfolioImages to the format expected by useImageSlider
    const imageData = images.map(img => ({ src: img.src }));
    
    const {
        currentIndex,
        currentImage,
        nextImage,
        prevImage,
        goToImage,
        hasMultipleImages
    } = useImageSlider(imageData);

    if (!images || images.length === 0) {
        return null;
    }

    // If only one image, show it without navigation
    if (!hasMultipleImages) {
        return (
            <div className="portfolio-image-container">
                <img 
                    src={images[0].src} 
                    alt={`${projectTitle} - Image 1`}
                    className={images[0].className}
                />
            </div>
        );
    }

    return (
        <div className="portfolio-image-slider">
            <div className="portfolio-image-container">
                {currentImage && (
                    <img 
                        src={currentImage.src} 
                        alt={`${projectTitle} - Image ${currentIndex + 1}`}
                        className={images[currentIndex]?.className || 'portfolio-image'}
                    />
                )}
                
                {/* Navigation arrows */}
                <button 
                    className="portfolio-nav-btn portfolio-nav-prev"
                    onClick={prevImage}
                    aria-label="Previous image"
                >
                    <IoIosArrowDropleftCircle />
                    
                </button>
                
                <button 
                    className="portfolio-nav-btn portfolio-nav-next"
                    onClick={nextImage}
                    aria-label="Next image"
                >
                   <IoIosArrowDroprightCircle />
                </button>
            </div>

            {/* Dot indicators */}
            <div className="portfolio-slider-dots">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`portfolio-dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToImage(index)}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}