import { useState } from "react"
import type { Project } from "../Types"

export default function PortfolioCarousel( {projects}: {projects: Project[]} ) {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const handleNext = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const handlePrev = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    if (projects.length === 0) {
        return null;
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
        </div>
    );
}