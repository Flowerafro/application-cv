import { useState, useRef } from "react";
import lhworks from '../assets/LHworks.jpeg';
import ColorModeToggle from "./ColorModeToggle";
import { NavLink } from "react-router-dom";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";

export default function Header() {
    // state som styrer at headeren skal gå fra fullscreen til shrink til normal
    const [headerState, setHeaderState] = useState<"fullscreen" | "shrink" | "normal">("fullscreen");
    const timeoutRef = useRef<number | null>(null);

    // knappen klikkes, headerState settes til shrink og starter Timeout for å sette til normal etter animasjon.
    const handleClick = () => {
        setHeaderState("shrink");
        // Etter animasjonen, bytt til normal header
        timeoutRef.current = setTimeout(() => {
            setHeaderState("normal");
        }, 900); // Samme som transition-tid i CSS
    };

    return (
        <header className={`header-bg ${headerState}`}>
            {headerState === "fullscreen" ? (
                <div className="intro-content">
                    <h1> </h1>
                    <button className="intro-btn" onClick={handleClick}> welcome </button>
                </div>
            ) : (
                <div className="header-content">
                    <div className="profile">
                        <NavLink to="/aboutme" className="profile-link" >
                            <img src={lhworks} alt="Profilbilde" className="profile-img" />
                        </NavLink>
                        <div className="profile-info">
                            <span className="profile-name">Line H</span>
                            <span className="profile-title">Student @ HIOF</span>
                        </div>
                    </div>
                    <div className="contact-links">
                        <ul>
                        <li><a href="#"><DiGithubBadge /></a></li>
                        <li><a href="#"><FaLinkedin /></a></li>
                    </ul>
                    </div>
                    <ColorModeToggle />
                </div>
            )}
            
        </header>
    );
}