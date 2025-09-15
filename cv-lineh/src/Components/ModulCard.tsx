import type { Modul } from "../Types";


export default function ModulCard( {modul, className = "modul-card"}: {modul: Modul, className?: string} ) {
    return (
        <div className={className}>
            <h3>{modul.title}</h3>
            <p>{modul.description}</p>
        </div>
    )
}
