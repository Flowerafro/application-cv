import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="nav-content">
        <NavLink
          to="/aboutme"
          className={({ isActive }) =>
            `nav-button ${isActive ? "active" : ""}`
          }
        >
          About me
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            `nav-button ${isActive ? "active" : ""}`
          }
        >
          Portfolio
        </NavLink>
      </div>
    </nav>
  );
}
