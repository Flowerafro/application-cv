// definere data types for CV application

import type { IconType } from "react-icons";

export interface Employment {
    id: string;
    title: string;
    period?: string;
    description?: string;
}

export interface EmploymentFlipCardProps {
    tagline: string;
    employees: Employment[];
    height?: number; // allow override if list grows
    onFlip?: (flipped: boolean) => void;
}

export interface interestImages {
    id?: string;
    src: string;
    className: string;
}

export interface Work {
    id: string;
    description: string;
}

export interface Tool {
    id: string;
    icon: IconType;
    link: string;
    name: string;
}

export interface Project {
    title: string;
    description: string;
    image?: string;
    video?: string;
    link?: string;
    pdf?: string;
    images?: interestImages[];
}

export interface Portfolio {
    id?: string;
    title: string;
    description: string;
    image?: string;
    images?: PortfolioImages[];
    link?: string;
    pdf?: string;
}

export interface PortfolioImages {
    id: string;
    src: string;
    className: string;
}

export interface Modul {
    id: string;
    title: string;
    description: string;
    className: string;
    tagline?: string;
    icon?: string;
    link?: string;
    image?: string
    projects?: Project[];
    tools?: Tool[]
    work?: Work[];
    interestImages?: interestImages[];
    employees?: Employment[];
}

// Context types
export interface DarkModeContextType {
    darkMode: boolean;
    toggleDarkMode: () => void;
}
