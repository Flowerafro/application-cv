import { useState, useEffect, useRef } from "react";
import ImageComponent from "./ImageComponent";
import Tool from "./Tool";
import Work from "./Work";
import type { Modul } from "../Types";

export default function ModulCard({ modul, className = "modul-card" }: { modul: Modul; className?: string }) {
    const [currentInterestImage, setCurrentInterestImage] = useState(0);
    const [hoveredToolName, setHoveredToolName] = useState<string | null>(null);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 900);
    const ref = useRef<HTMLDivElement | null>(null);
    const [revealProgress, setRevealProgress] = useState(0); // 0..1 for mobile reveal

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 900);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (modul.id !== '7' || isDesktop) return;
        const node = ref.current;
        if (!node || typeof IntersectionObserver === 'undefined') return;

        const obs = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // Use intersection ratio as reveal progress
                const ratio = Math.min(1, Math.max(0, entry.intersectionRatio));
                setRevealProgress(ratio);
            });
        }, { threshold: Array.from({length: 21}, (_,i) => i/20) });

        obs.observe(node);
        return () => obs.disconnect();
    }, [modul.id, isDesktop]);

    useEffect(() => {
        if (modul.id === '6' && modul.interestImages && modul.interestImages.length > 0) {
            const interval = setInterval(() => {
                setCurrentInterestImage((prevIndex) => (prevIndex + 1) % modul.interestImages!.length);
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [modul.id, modul.interestImages]);

    const interestImageSrc = modul.interestImages?.[currentInterestImage]?.src;

    const handleMouseEnter = (toolName: string) => {
        if (isDesktop) {
            setHoveredToolName(toolName);
        }
    };

    const handleMouseLeave = () => {
        if (isDesktop) {
            setHoveredToolName(null);
        }
    };

    const inlineStyle = modul.id === '7' && !isDesktop ? { ['--reveal' as any]: revealProgress } : undefined;

    // click/key handlers removed (flip behaviour reverted)

    return (
        <div
            className={className}
            onMouseLeave={handleMouseLeave}
            ref={ref}
            style={inlineStyle as any}
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
                    <div className="tools-list">
                        {modul.tools.map((tool, index) => (
                            <div key={index} onMouseEnter={() => handleMouseEnter(tool.name)}>
                                <Tool icon={tool.icon} link={tool.link} />
                            </div>
                        ))}
                    </div>
                )}
                {modul.work && modul.work.length > 0 && <Work work={modul.work} />}
                {modul.interestImages && modul.interestImages.length > 0 && interestImageSrc && (
                    <div className="interest-images-list">
                        <ImageComponent
                            src={interestImageSrc}
                            alt={`Interest image for ${modul.title}`}
                            className="interest-image"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
