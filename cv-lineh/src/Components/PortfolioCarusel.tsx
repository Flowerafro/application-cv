import { useState } from "react"
import type { PortfolioCarouselProps } from "../Types"

export default function PortfolioCarousel( {projects}: PortfolioCarouselProps ) {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const handleNext = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const handlePrev = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    const handleDotClick = (index: number) => {
        setCurrentProjectIndex(index);
    }

    if (projects.length === 0) {
        return <div>No projects available</div>;
    }
    const currentProject = projects[currentProjectIndex];

    return (
        <div className="modul-card modul-card-portfolio">
            <div 
                className="slider-content" 
                style={{ backgroundImage: `url(${currentProject.image})` }}
            >
                <h3>{currentProject.title}</h3>
                <p>{currentProject.description}</p>
            </div>
            <div className="slider-controls">
                <button onClick={handlePrev}>&lt;</button>
                <button onClick={handleNext}>&gt;</button>
            </div>
            <div className="slider-indicators">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator-dot ${index === currentProjectIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                        aria-label={`Gå til slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}