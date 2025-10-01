// definere data types for CV application

import type { IconType } from "react-icons";

export interface SocialLink {
    id: string;
    icon: IconType;
    link: string;
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
    link?: string;
    pdf?: string;
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
    work?: Work[]; // optional property - array of Work objects til Experience module
    interestImages?: interestImages[]; // optional property - array of interestImages objects til Interests module
    socialLinks?: SocialLink[]; // optional property - array of SocialLink objects til FindMe module
}
