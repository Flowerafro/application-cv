import { useCallback, useRef, useState } from 'react';
import Work from './Work';
import ToolList from './ToolList';
import InterestCarousel from './InterestCarousel';
import type { Modul } from '../Types';
import useViewport from '../Hooks/useViewport';

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
                    <img src={modul.image} alt={modul.title} className="modul-card-image" />
                ) : modul.icon ? (
                    <img src={modul.icon} alt="Icon" className="modul-card-icon" />
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

            </div>
        </div>
    );
}
