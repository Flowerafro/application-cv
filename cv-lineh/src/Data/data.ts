import type { Modul } from "../Types";
import { SiAdobe, SiGithub, SiFigma, SiNotion, SiTrello, SiSass, SiCanva, SiSanity } from "react-icons/si";

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
        title: 'Bachelor\'s Degree',
        description: 'in Information systems @ HIOF',
        className: 'modul-card-education',
        image: '',
        icon: '/diploma.png',
    },
    {
        id: '3',
        title: ' ',
        description: 'I mostly code with',
        className: 'modul-card-coding',
        image: '',
    },
    {
        id: '4',
        title: 'Tools',
        description: 'but I also have exoperience with these',
        className: 'modul-card-tools',
        image: '',
        tools: [
            {
                icon: SiAdobe,
                link: 'https://www.adobe.com/'
            },
            {
                icon: SiSanity,
                link: 'https://www.sanity.io/'
            },
            {
                icon: SiGithub,
                link: 'https://github.com/'
            },
            {
                icon: SiFigma,
                link: 'https://www.figma.com/'
            },
            {
                icon: SiNotion,
                link: 'https://www.notion.so/'
            },
            {
                icon: SiTrello,
                link: 'https://trello.com/'
            },
            {
                icon: SiSass,
                link: 'https://sass-lang.com/'
            },
            {
                icon: SiCanva,
                link: 'https://www.canva.com/'
            }
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