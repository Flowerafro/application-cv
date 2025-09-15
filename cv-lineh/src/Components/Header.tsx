
import { useState, useRef } from "react";

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
                    <button className="intro-btn" onClick={handleClick}> Go.</button>
                </div>
            ) : (
                <div className="header-content">
                    <div className="profile">
                        <img src="/public/LHworks.jpeg" alt="Profilbilde" className="profile-img" />
                        <div className="profile-info">
                            <span className="profile-name">Ditt Navn</span>
                            <span className="profile-title">Student</span>
                        </div>
                    </div>
                    <button className="contact-btn">Kontakt meg</button>
                </div>
            )}
            
        </header>
    );
}