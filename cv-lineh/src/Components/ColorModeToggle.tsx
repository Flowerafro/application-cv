import { useDarkMode } from "../Context/ThemeContext";
import { MdLightMode, MdDarkMode } from "react-icons/md";

function ColorModeToggle() {
    const { darkMode, toggleDarkMode } = useDarkMode();
    
    const handleClick = () => {
        toggleDarkMode();
    }

    return (
        <div className="colortoggle">
            <button 
                onClick={handleClick}
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
                {darkMode ? <MdLightMode /> : <MdDarkMode />}
            </button>
        </div>
    )
}

export default ColorModeToggle;