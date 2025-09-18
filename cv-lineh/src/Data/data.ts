import type { Modul } from "../Types";
import { faFigma, faNotion, faTrello, faSass, faGithub } from '@fortawesome/free-brands-svg-icons';

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
        description: 'I am most familiar with',
        className: 'modul-card-coding',
        image: '',
    },
    {
        id: '3',
        title: 'BA',
        description: 'Information systems HIOF',
        className: 'modul-card-education',
        image: '',
        icon: '/diploma.png',
    },
    {
        id: '4',
        title: 'Tools ',
        description: 'I love to work with',
        className: 'modul-card-tools',
        image: '',
        tools: [
            {
                name: 'Github',
                icon: faGithub,
            },
            {
                name: 'Figma',
                icon: faFigma
            },
            {
                name: 'Notion',
                icon: faNotion
            },
            {
                name: 'Trello',
                icon: faTrello,
            },
            {
                name: 'Sass',
                icon: faSass
            },
        ]
    },
    {
        id: '5',
        title: 'Experience',
        description: ' arbeidserfaring  ',
        className: 'modul-card-experience',
        image: '',
    },
    {
        id: '6',
        title: 'Interests',
        description: 'text',
        className: 'modul-card-interests',
        image: '',
    },
    {
        id: '7',
        title: 'Find me',
        description: 'text',
        className: 'modul-card-findme',
        image: '',
    }
]