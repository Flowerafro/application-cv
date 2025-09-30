import Header from "./Header";

import type { Modul } from "../Types";
import ModulList from "./ModulList";
import NavBar from "./NavBar";
import { getPortfolioAsModuls } from "../Data/data";
import { useState } from "react";

export default function Layout({ moduls }: { moduls: Modul[] }) {
  const [view, setView] = useState<'moduls' | 'portfolio'>('moduls');

  return (
    <div className="layout">
      <Header />
      <NavBar view={view} onChange={(v) => setView(v)} />
      {view === 'moduls' ? (
        <ModulList moduls={moduls} />
      ) : (
        <ModulList moduls={getPortfolioAsModuls()} />
      )}
    </div>
  );
}