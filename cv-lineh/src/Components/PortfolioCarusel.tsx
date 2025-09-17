import { useState, useEffect } from "react";
import type { PortfolioCarouselProps } from "../Types";
import { useSwipeable } from "react-swipeable";

export default function PortfolioCarousel({ projects }: PortfolioCarouselProps) {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    // knapper for å navigere mellom prosjekter
    const handleNext = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const handlePrev = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    // Dot indicators
    const handleDotClick = (index: number) => {
        setCurrentProjectIndex(index);
    };

    // Swipe handlers for devices with touch support
    const handlers = useSwipeable({
        onSwipedLeft: () => handleNext(), // Swipe left to go to next
        onSwipedRight: () => handlePrev(), // Swipe right to go to previous
        preventScrollOnSwipe: true, // unngår scroll med swipe
        trackTouch: true, // aktiverer touch sporing
        trackMouse: true, // aktiverer mus sporing
    });

    // Automatisk bildebytte
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000); // Bytter bilde hvert 5. sekund

        return () => clearInterval(interval); // Rydd opp når komponenten fjernes
    }, [projects.length]);

    if (projects.length === 0) {
        return <div>No projects available</div>;
    }
    const currentProject = projects[currentProjectIndex];

    console.log("Current Project:", currentProject.image);

    return (
        <div className="modul-card-portfolio" {...handlers}>
            <a href={currentProject.link} target="_blank" rel="noopener noreferrer">
                <div className="slider-info">
                    <h3>{currentProject.title}</h3>
                    <p>{currentProject.description}</p>
                </div>
                <div className="slider-content">
                    <div
                        className="slider-image"
                        style={{ backgroundImage: `url(${currentProject.image})` }}
                    />
                </div>
            </a>
            <div className="slider-controls">
                <button onClick={handlePrev}>&lt;</button>
                <button onClick={handleNext}>&gt;</button>
            </div>
            <div className="slider-indicators">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator-dot ${index === currentProjectIndex ? "active" : ""}`}
                        onClick={() => handleDotClick(index)}
                        aria-label={`Gå til slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}