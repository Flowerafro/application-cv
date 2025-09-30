
import ModulCard from "./ModulCard";
import type { Modul } from "../Types";

export default function ModulList({ moduls }: { moduls?: Modul[] }) {
    if (!moduls || moduls.length === 0) return <main className="modul-list" />;

    return (
        <main className="modul-list">
            {moduls.map((modul) => (
                <ModulCard key={modul.id} modul={modul} className={`modul-card ${modul.className || ''}`} />
            ))}
        </main>
    );
}