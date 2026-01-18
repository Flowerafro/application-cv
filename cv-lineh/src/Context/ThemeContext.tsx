import { createContext, useState, useEffect, type ReactNode } from "react";
import type { DarkModeContextType } from "../Types";

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

interface DarkModeProviderProps {
    children: ReactNode;
}

function DarkModeProvider({ children }: DarkModeProviderProps) {
    // Initialize from localStorage or default to false
    const [darkMode, setDarkMode] = useState<boolean>(() => {
        const saved = localStorage.getItem('cv-darkMode');
        return saved === 'true';
    });

    // Apply theme to document root and save to localStorage
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
        localStorage.setItem('cv-darkMode', darkMode.toString());
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
    }

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}



export { DarkModeContext, DarkModeProvider };