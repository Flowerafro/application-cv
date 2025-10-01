import { useState, useRef, useCallback } from "react";
import ImageComponent from "./ImageComponent";
// Tool rendering is handled by ToolList now
import Work from "./Work";
import ToolList from "./ToolList";
import InterestCarousel from "./InterestCarousel";
import type { Modul } from "../Types";
import useViewport from "../Hooks/useViewport";

export default function ModulCard({ modul, className = "modul-card" }: { modul: Modul; className?: string }) {
    // rotating images handled by InterestCarousel hook
    const [hoveredToolName, setHoveredToolName] = useState<string | null>(null);
    const { isDesktop } = useViewport();
    const ref = useRef<HTMLDivElement | null>(null);


    const handleMouseEnter = useCallback((toolName: string) => {
        if (isDesktop) {
            setHoveredToolName(toolName);
        }
    }, [isDesktop]);

    const handleMouseLeave = useCallback(() => {
        if (isDesktop) {
            setHoveredToolName(null);
        }
    }, [isDesktop]);


    return (
        <div
            className={className}
            onMouseLeave={handleMouseLeave}
            ref={ref}
        >
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
                    <InterestCarousel images={modul.interestImages} altPrefix={`Interest image for ${modul.title}`} />
                )}
            </div>
        </div>
    );
}
