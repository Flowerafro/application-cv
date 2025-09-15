// definere data types for CV application

export interface PortfolioCarouselProps {
    projects: Project[];
}

export interface Project {
    title: string;
    description: string;
    image?: string; // optional property
    link?: string; // optional property
}

export interface Modul {
    id: string;
    title: string;
    description: string;
    image?: string; // optional property
    projects?: Project[]; // optional property - array of Project objects til Portfolio module
}