import type { Modul } from "../Types";

export const moduls: Modul[] = [
    {
        id: '1',
        title: 'Portfolio',
        description: 'text',
        className: 'modul-card-portfolio',
        projects: [
            {
                title: 'Web News Paper: Daily Bugle',
                description: 'HTML/CSS/JS ',
                image: '/bugle.png',
                link: 'https://github.com/Flowerafro/kommunikasjonsdesign_thedailybugle',
            },
            {
                title: 'Simple web shop',
                description: 'Description of Project 2',
                image: 'webshop.png',
                link: '',
            },
            {
                title: 'Project 3',
                description: 'Description of Project 3',
                image: '/lime.jpg',
                link: '',
            }
        ]
    },
    {
        id: '2',
        title: ' ',
        description: 'is my main focus',
        className: 'modul-card-coding',
        image: 'image.jpg',
    },
    {
        id: '3',
        title: 'Work',
        description: 'text',
        className: 'modul-card-work',
        image: 'image.jpg',
    },
    {
        id: '4',
        title: 'I have an',
        description: 'BA in Information systems',
        className: 'modul-card-education',
        image: 'diploma.png',
    },
    {
        id: '5',
        title: 'About me',
        description: 'text',
        className: 'modul-card-about',
        image: 'image.jpg',
    },
    {
        id: '6',
        title: 'Find me',
        description: 'text',
        className: 'modul-card-findme',
        image: 'image.jpg',
    },
    {
        id: '7',
        title: 'Interests',
        description: 'text',
        className: 'modul-card-interests',
        image: 'image.jpg',
    }
]