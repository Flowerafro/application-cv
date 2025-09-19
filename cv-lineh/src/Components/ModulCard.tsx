import { useState, useEffect } from "react";
import ImageComponent from "./ImageComponent";
import Tool from "./Tool";
import Work from "./Work";
import type { Modul } from "../Types";

export default function ModulCard({ modul, className = "modul-card" }: { modul: Modul; className?: string }) {
    const [currentInterestImage, setCurrentInterestImage] = useState(0);

    useEffect(() => {
        if (modul.id === '6' && modul.interestImages && modul.interestImages.length > 0) {
            const interval = setInterval(() => {
                setCurrentInterestImage((prevIndex) => (prevIndex + 1) % modul.interestImages!.length);
            }, 3000);

            return () => clearInterval(interval); // Rydd opp intervallet
        }
    }, [modul.id, modul.interestImages]);

    return (
    <div
        className={className}>
        {modul.image ? (
            <ImageComponent src={modul.image} alt={modul.title} className="modul-card-image" />
        ) : modul.icon ? (
            <ImageComponent src={modul.icon} alt="Icon" className="modul-card-icon" />
        ) : null}
        <div className="modul-text">
            <h3>{modul.title}</h3>
            <p>{modul.description}</p>
        </div>
        {modul.tools && modul.tools.length > 0 && (
            <div className="tools-list">
                {modul.tools.map((tool, index) => (
                    <Tool key={index} icon={tool.icon} link={tool.link} />
                ))}
            </div>
        )}
        {modul.work && modul.work.length > 0 && <Work work={modul.work} />}
        {modul.interestImages && modul.interestImages.length > 0 && (
            <div className="interest-images-list">
                <ImageComponent
                    src={modul.interestImages[currentInterestImage].src}
                    alt={`Interest image for ${modul.title}`}
                    className="interest-image"
                />
            </div>
        )}
    </div>
    );
}