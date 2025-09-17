import type { Modul } from "../Types";


export default function ModulCard({ modul, className = "modul-card" }: { modul: Modul, className?: string }) {
    return (
        <div className={className}>
            <div className="modul-text">
                <h3>{modul.title}</h3>
                <p>{modul.description}</p>
            </div>
            {modul.image && (
                <img src={modul.image} alt={modul.title} className="modul-image" />
            )} {/* Viser kun bildet hvis `image` finnes */}
        </div>
    );
}