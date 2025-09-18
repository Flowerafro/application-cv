import type { Modul } from "../Types";
import Tool from "./Tool";


export default function ModulCard({ modul, className = "modul-card" }: { modul: Modul, className?: string }) {
    return (
        <div className={className}>
            {modul.image ? (
                <img src={modul.image} alt={modul.title} className="modul-card-image" />
            ) : modul.icon ? (
                <img src={modul.icon} alt="Icon" className="modul-card-icon" />
            ) : null}
            <div className="modul-text">
                <h3>{modul.title}</h3>
                <p>{modul.description}</p>
            </div>
            {modul.tools && modul.tools.length > 0 && (
        <div className="tools-list">
                        {modul.tools.map((tool, index) =>
                            tool.icon ? (
                                <Tool key={index} icon={tool.icon} link={tool.link} />
                            ) : null
                        )}
                    </div>
                )}
        </div>
        
)}
      