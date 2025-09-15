
import ModulCard from "./ModulCard";
import type { Modul } from "../Types";

export default function ModulList({moduls}: {moduls: Modul[]} ) {
    return (
        <main className="modul-list">
            {moduls.map(modul => <ModulCard key={modul.id} modul={modul} className={modul.id === "1" ? "modul-card modul-card-portfolio" : "modul-card"} />)}
        </main>
    )
}