import { useCallback, useRef, useState } from 'react';
import ImageComponent from './ImageComponent';
import Work from './Work';
import ToolList from './ToolList';
import InterestCarousel from './InterestCarousel';
import PortfolioImageSlider from './PortfolioImageSlider';
import type { Modul } from '../Types';
import useViewport from '../Hooks/useViewport';
import PDFButton from './PDFButton';

export default function ModulCard({ modul, className = 'modul-card' }: { modul: Modul; className?: string }) {
    const [hoveredToolName, setHoveredToolName] = useState<string | null>(null);
    const { isDesktop } = useViewport();
    const ref = useRef<HTMLDivElement | null>(null);

    // modal and inline-view removed: we only show Open/Download via PDFButton

    const handleMouseEnter = useCallback(
        (toolName: string) => {
            if (isDesktop) setHoveredToolName(toolName);
        },
        [isDesktop]
    );

    const handleMouseLeave = useCallback(() => {
        if (isDesktop) setHoveredToolName(null);
    }, [isDesktop]);

    // inline modal removed; we only expose PDFButton (open/download)

    return (
        <div className={className} onMouseLeave={handleMouseLeave} ref={ref}>
            <div className="modul-content-wrapper">
                {modul.image ? (
                    <ImageComponent src={modul.image} alt={modul.title} className="modul-card-image" />
                ) : modul.icon ? (
                    <ImageComponent src={modul.icon} alt="Icon" className="modul-card-icon" />
                ) : null}

                <div className="modul-text">
                    <h3>{isDesktop && hoveredToolName ? hoveredToolName : modul.title}</h3>
                    <p>{modul.description}</p>
                </div>

                {modul.tools && modul.tools.length > 0 && (
                    <ToolList tools={modul.tools} onHover={handleMouseEnter} onLeave={handleMouseLeave} />
                )}

                {modul.work && modul.work.length > 0 && <Work work={modul.work} />}

                {modul.interestImages && modul.interestImages.length > 0 && (
                    <InterestCarousel images={modul.interestImages} altPrefix={`Image for ${modul.title}`} />
                )}

                {modul.projects && modul.projects.length > 0 && (
                    <section className="modul-projects">
                        {modul.projects.map((p, idx) => (
                            <div key={(p.title || '') + idx} className="project-item">
                                {/* Portfolio Image Slider */}
                                {p.images && p.images.length > 0 && (
                                    <PortfolioImageSlider 
                                        images={p.images.map(img => ({
                                            id: img.id || `img-${idx}`,
                                            src: img.src,
                                            className: img.className
                                        }))}
                                        projectTitle={p.title}
                                    />
                                )}
                                
                                <div className="project-actions">
                                    {p.pdf ? (
                                        <PDFButton filePath={p.pdf} title={`Open`} />
                                    ) : p.link ? (
                                        <div className="pdf-button-wrapper">
                                            <a className="pdf-view-btn" href={p.link} target="_blank" rel="noopener noreferrer">
                                                Check it out
                                            </a>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        ))}
                    </section>
                )}

            </div>
        </div>
    );
}
