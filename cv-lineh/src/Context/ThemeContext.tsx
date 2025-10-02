import { createContext, useState, useContext, useEffect, type ReactNode } from "react";
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

// Custom hook to use the DarkMode context
export function useDarkMode(): DarkModeContextType {
    const context = useContext(DarkModeContext);
    
    if (!context) {
        throw new Error('useDarkMode must be used within a DarkModeProvider');
    }
    
    return context;
}

export { DarkModeContext, DarkModeProvider };