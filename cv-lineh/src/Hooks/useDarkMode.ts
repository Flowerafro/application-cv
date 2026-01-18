import { useContext } from 'react';
import { DarkModeContext } from '../Context/ThemeContext';
import type { DarkModeContextType } from '../Types';

// Custom hook to use the DarkMode context
export function useDarkMode(): DarkModeContextType {
    const context = useContext(DarkModeContext);

    if (!context) {
        throw new Error('useDarkMode must be used within a DarkModeProvider');
    }

    return context;
}
