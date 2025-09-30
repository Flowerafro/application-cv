import { useState } from 'react';
import type { Project } from '../Types';

export default function Portfolio({ projects }: { projects: Project[] }) {
    const items = projects.slice(0, 5);
    const [index, setIndex] = useState(0);

    if (!items || items.length === 0) return null;

    const current = items[index];

    const next = () => setIndex((i) => (i + 1) % items.length);
    const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

    return (
        <section
            className="modul-card-portfolio portfolio-hero full-hero"
            style={{ backgroundImage: `url(${current.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            aria-label={`Portfolio slide ${index + 1} of ${items.length}`}
        >
            <button className="portfolio-nav portfolio-prev" onClick={prev} aria-label="Forrige prosjekt">‹</button>
            <button className="portfolio-nav portfolio-next" onClick={next} aria-label="Neste prosjekt">›</button>

            <div className="portfolio-overlay">
                <div className="portfolio-meta">
                    <h3>{current.title}</h3>
                    <p>{current.description}</p>
                    {current.link && (
                        <a className="portfolio-cta" href={current.link} target="_blank" rel="noopener noreferrer">Se case</a>
                    )}
                </div>
            </div>
        </section>
    );
}
