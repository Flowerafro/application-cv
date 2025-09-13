import type { Modul } from "../Types";


export default function ModulCard( {modul}: {modul: Modul} ) {
    return (
        <div className="modul-card">
            <h3>{modul.title}</h3>
            <p>{modul.description}</p>
        </div>
    )
}
