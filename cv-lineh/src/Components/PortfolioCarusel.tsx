import { useState } from "react"
import type { PortfolioCarouselProps } from "../Types"
import { useSwipeable } from "react-swipeable";

export default function PortfolioCarousel( {projects}: PortfolioCarouselProps ) {
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
    }

    // Swipe handlers for devices with touch support
    const handlers = useSwipeable({
        onSwipedLeft: () => handleNext(), // Swipe left to go to next
        onSwipedRight: () => handlePrev(), // Swipe right to go to previous
        preventScrollOnSwipe: true, // unngår scroll med swipe
        trackTouch: true, // aktiverer touch sporing
        trackMouse: true, // aktiverer mus sporing
    });


    if (projects.length === 0) {
        return <div>No projects available</div>;
    }
    const currentProject = projects[currentProjectIndex];

    console.log(projects);

    return (
        <div className="modul-card-portfolio" {...handlers}>

            <a href={currentProject.link} target="_blank" rel="noopener noreferrer" >
                <div className="slider-content" style={{ backgroundImage: `url(${currentProject.image})` }}>
                    <h3>{currentProject.title}</h3>
                    <p>{currentProject.description}</p>    
                </div>
            </a>
            <div className="slider-controls">
                <button onClick={handlePrev}>&lt;</button>
                <button onClick={handleNext}>&gt;</button>
            </div>
            <div className="slider-indicators">
                {projects.map((_, index) => (
                    <button key={index} className={`indicator-dot ${index === currentProjectIndex ? 'active' : ''}`} onClick={() => handleDotClick(index)} aria-label={`Gå til slide ${index + 1}`} />
                ))}
            </div>
        </div>
    );
}