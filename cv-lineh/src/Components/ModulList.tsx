
import ModulCard from "./ModulCard";
import Portfolio from "./Portfolio";
import type { Modul } from "../Types";

export default function ModulList({ moduls }: { moduls: Modul[] }) {
    return (
               <main className="modul-list">
            {moduls.map(modul => {
                if (modul.id === "1" && modul.projects) {
                    return <Portfolio key={modul.id} projects={modul.projects} />;
                } else {
                    return (
                        <ModulCard
                            key={modul.id}
                            modul={modul}
                            className={`modul-card ${modul.className || ''}`} // Legger til unik klasse
                        />
                    );
                }
            })}
        </main>
    );
}