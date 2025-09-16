import type { Modul } from "../Types";

import projectImage1 from '/coffee.jpg';
import projectImage2 from '/thunder.jpg';
import projectImage3 from '/lime.jpg';

export const moduls: Modul[] = [
    {
        id: '1',
        title: 'Portfolio',
        description: 'text',
        projects: [
            {
                title: 'Project 1',
                description: 'Description of Project 1',
                image: projectImage1,
            },
            {
                title: 'Project 2',
                description: 'Description of Project 2',
                image: projectImage2,
            },
            {
                title: 'Project 3',
                description: 'Description of Project 3',
                image: projectImage3,
            }
        ]
    },
    {
        id: '2',
        title: 'Projects',
        description: 'text',
        image: 'image.jpg',
    },
    {
        id: '3',
        title: 'About me',
        description: 'text',
        image: 'image.jpg',
    },
    {
        id: '4',
        title: 'Work',
        description: 'texts about module 4',
        image: 'image.jpg',
    },
    {
        id: '5',
        title: 'Education',
        description: 'text',
        image: 'image.jpg',
    },
    {
        id: '6',
        title: 'Contact',
        description: 'text',
        image: 'image.jpg',
    },
    {
        id: '7',
        title: 'Blog',
        description: 'text',
        image: 'image.jpg',
    }
]