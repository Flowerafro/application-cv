import type { Modul } from "../Types";


export default function ModulCard( {modul}: {modul: Modul} ) {
    return (
        <div className="modul-card">
            <h2>{modul.title}</h2>
            <p>{modul.description}</p>
        </div>
    )
}
