import type { Modul } from "../Types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
                    {modul.tools.map((tool, index) => (
                        <div key={index} className="tool-item">
                            {typeof tool.icon === "string" ? (
                                <img src={tool.icon} alt={tool.name} className="tool-icon" />
                            ) : tool.icon ? (
                                // Assuming you use FontAwesome for IconDefinition
                                <span className="tool-icon">
                                    {/* @ts-ignore */}
                                    <FontAwesomeIcon icon={tool.icon} />
                                </span>
                            ) : null}
                            <span className="tool-name">{tool.name}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}