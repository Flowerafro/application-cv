import ModulCard from "./ModulCard";
import { moduls } from '../Data';

export default function ModulList() {

   if (moduls.length === 0) {
    return (
      <main className="modul-list" aria-live="polite">
        <p className="empty">No modules available</p>
      </main>
    );
  }

    return (
        <div className="modul-list">
            {moduls.map((modul) => {

                const extra = modul.className && modul.className !== 'modul-card' ? modul.className : '';
                const className = extra ? `modul-card ${extra}` : 'modul-card';
                return <ModulCard key={modul.id} modul={modul} className={className} />;
            })}
        </div>
    );
}