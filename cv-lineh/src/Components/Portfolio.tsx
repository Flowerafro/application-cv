import type { Project } from '../Types';

export default function Portfolio({ projects }: { projects: Project[] }) {
    const highlighted = projects.slice(0, 5);

    return (
        <section className="modul-card-portfolio portfolio-hero">
            <div className="portfolio-grid">
                {highlighted.map((p, i) => (
                    <article key={i} className="portfolio-item">
                        <a href={p.link || '#'} target="_blank" rel="noopener noreferrer">
                            <div
                                className="portfolio-image"
                                style={{ backgroundImage: `url(${p.image})` }}
                                aria-hidden={p.image ? 'false' : 'true'}
                            />
                            <div className="portfolio-meta">
                                <h3>{p.title}</h3>
                                <p>{p.description}</p>
                                <span className="portfolio-cta">Se case</span>
                            </div>
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
}
