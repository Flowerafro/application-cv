import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const cur = location.pathname;

  const [activePath, setActivePath] = useState<string>(
    cur === "/" ? "/aboutme" : cur
  );


  useEffect(() => {
    setActivePath(cur === "/" ? "/aboutme" : cur);
  }, [cur]);

  return (
    <nav className="nav-bar">
      <div className="nav-content">
        <NavLink
          to="/aboutme"
          className={`nav-button ${activePath === "/aboutme" ? "active" : ""}`}
          onClick={() => setActivePath("/aboutme")}
        >
          About me
        </NavLink>

        <NavLink
          to="/portfolio"
          className={`nav-button ${activePath === "/portfolio" ? "active" : ""}`}
          onClick={() => setActivePath("/portfolio")}
        >
          Portfolio
        </NavLink>
      </div>
    </nav>
  );
}