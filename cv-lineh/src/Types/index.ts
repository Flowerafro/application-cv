// definere data types for CV application

import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export interface Tool {
    name: string;
    icon: string | IconDefinition;  // URL eller path til ikonbilde

}

export interface PortfolioCarouselProps {
    projects: Project[];
}

export interface Project {
    title: string;
    description: string;
    image?: string;
    video?: string;
    link?: string;
}

export interface Modul {
    id: string;
    title: string;
    description: string;
    className: string; // legg til className property
    icon?: string; // optional property for education module
    image?: string // optional property
    projects?: Project[]; // optional property - array of Project objects til Portfolio module
    tools?: Tool[]
}
