
import ModulCard from "./ModulCard";
import { moduls } from '../Data';

export default function ModulList() {

    //moduls = undefined; // <-- temporary: forces the loading state for testing
    // data loading check
    if (moduls === undefined) {
        return (
            <main className="modul-list" aria-busy="true">
                <p className="loading">Wow, this is awkward but none of the moduls are available right now. Please try again later.</p>
            </main>
        );
    }

    if (Array.isArray(moduls) && moduls.length === 0) {
        return (
            <main className="modul-list" aria-live="polite">
                <p className="empty">No modules available</p>
            </main>
        );
    }

    return (
        <main className="modul-list">
            {moduls.map((modul) => {
                // always include the base class 'modul-card' and append any extra class
                const extra = modul.className && modul.className !== 'modul-card' ? modul.className : '';
                const className = extra ? `modul-card ${extra}` : 'modul-card';
                return <ModulCard key={modul.id} modul={modul} className={className} />;
            })}
        </main>
    );
}