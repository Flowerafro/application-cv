import Header from "./Header";
import Footer from "./Footer";

import type { Modul } from "../Types";
import ModulList from "./ModulList";

export default function Layout({moduls}: {moduls: Modul[]} ) {
  return (
    <div className="layout">
        <Header />
        <ModulList moduls={moduls}/>
        <Footer />
    </div>
  );
}