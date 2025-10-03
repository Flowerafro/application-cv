import PortfolioImageSlider from './PortfolioImageSlider';
import type { Portfolio } from '../Types';
import PDFButton from './PDFButton';

export default function ProjectCard({ project }: { project: Portfolio }) {
    return (
        <div className="project-card">
            <div className="project-content-wrapper">
                <div className="project-text">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </div>

                {project.images && project.images.length > 0 && (
                    <PortfolioImageSlider 
                        images={project.images.map(img => ({
                            id: img.id || `img-${project.id}`,
                            src: img.src,
                            className: img.className
                        }))}
                        projectTitle={project.title}
                    />
                )}
                
                <div className="project-actions">
                    {project.pdf ? (
                        <PDFButton filePath={project.pdf} title={`Open`} />
                    ) : project.link ? (
                        <div className="pdf-button-wrapper">
                            <a className="pdf-view-btn" href={project.link} target="_blank" rel="noopener noreferrer">
                                Check it out
                            </a>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
