
import ImageComponent from "./ImageComponent";
import Tool from "./Tool";
import Work from "./Work";
import type { Modul } from "../Types";

export default function ModulCard({ modul, className = "modul-card" }: { modul: Modul; className?: string }) {
    return (
        <div className={className}>
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
                    {modul.tools
                        .map((tool, index) => (
                            <Tool key={index} icon={tool.icon} link={tool.link} />
                        ))}
                </div>
            )}
            {modul.work && modul.work.length > 0 && (
                <Work work={modul.work} />
            )}
        </div>
    );
}