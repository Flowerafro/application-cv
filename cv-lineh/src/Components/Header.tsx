import { useState, useRef } from "react";
import lhworks from '../assets/LHworks.jpeg';
import ColorModeToggle from "./ColorModeToggle";
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa6";
import { FaDeviantart } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import PDFButton from "./PDFButton";

export default function Header() {
    const [headerState, setHeaderState] = useState<"fullscreen" | "shrink" | "normal">("fullscreen");
    const timeoutRef = useRef<number | null>(null);

    const handleClick = () => {
        setHeaderState("shrink");
        timeoutRef.current = setTimeout(() => {
            setHeaderState("normal");
        }, 900); 
    };

    return (
        <header className={`header-bg ${headerState} aurora-drift`}>
            {headerState === "fullscreen" ? (
                <div className="intro-content">
                    <h1> Hi!  Im Line a designer of digital experiences and web designs</h1>
                    <button className="intro-btn" onClick={handleClick}> Welcome </button>
                </div>
            ) : (
                <div className="header-content">
                    <div className="profile">
                        <NavLink to="/aboutme" className="profile-link" >
                            <img src={lhworks} alt="Profilbilde" className="profile-img" />
                        </NavLink>
                        <div className="profile-info">
                            <span className="profile-name">Line H</span>
                            <span className="profile-title">IT-student @ HIOF</span>
                        </div>
                    </div>
                    <div className="contact-links">
                        <ul>
                        <li><a href="https://github.com/Flowerafro" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
                        <li><a href="https://www.linkedin.com/in/line-henriksen-542a44290/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></li>
                        <li><a href="https://www.behance.net/linehenriksen2" target="_blank" rel="noopener noreferrer"><FaBehance /></a></li>
                        <li><a href="https://www.deviantart.com/fl0werafr0" target="_blank" rel="noopener noreferrer"><FaDeviantart /></a></li>
                    </ul>
                    </div>
                    <PDFButton filePath="/application-cv/Resume2025-2.pdf" title="My CV" className="cv-button" />
                    <div className="colortogglediv">
                        <ColorModeToggle />
                    </div>
                </div>
            )}
            
        </header>
    );
}