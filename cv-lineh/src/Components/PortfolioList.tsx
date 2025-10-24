import { portfolio } from '../Data';
import ProjectCard from './ProjectCard';
import type { Portfolio } from '../Types';

export default function PortfolioList() {
    if (!portfolio || portfolio.length === 0) {
        return (
            <main className="portfolio-list" aria-live="polite">
                <p className="empty">No portfolio projects available at this time.</p>
            </main>
        );
    }

    return (
        <div className="portfolio-list">
            {portfolio.map((project: Portfolio) => (
                <ProjectCard key={project.id} project={project}  />
            ))}
        </div>
    );
}
