import type { Modul } from "../Types";
import { SiAdobe, SiGithub, SiFigma, SiNotion, SiTrello, SiSass, SiCanva, SiSanity, SiLinkedin } from "react-icons/si";

import bugle from '../assets/bugle.png';
import webshop from '../assets/webshop.png';
import diploma from '../assets/diploma.png';
import hiking from '../assets/hiking.jpg';
import climbing from '../assets/climbing.jpg';
import reading from '../assets/reading.jpg';
import travel1 from '../assets/travel1.jpg';
import camping from '../assets/camping.jpeg';

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
                image: bugle,
                link: 'https://github.com/Flowerafro/kommunikasjonsdesign_thedailybugle',
            },
            {
                title: 'Simple web shop',
                description: 'Description of Project 2',
                image: webshop,
                link: '',
            },
            {
                title: 'Project 3',
                description: 'Description of Project 3',
                image: '',
                link: '',
            }
        ]
    },
    {
        id: '2',
        title: 'Bachelor\'s Degree',
        description: 'in Information systems HIOF',
        className: 'modul-card-education',
        image: '',
        icon: diploma,
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
        description: 'but I also worked with these',
        className: 'modul-card-tools',
        image: '',
        tools: [
            {
                icon: SiAdobe,
                link: 'https://www.adobe.com/',
                name: 'Adobe'
            },
            {
                icon: SiSanity,
                link: 'https://www.sanity.io/',
                name: 'Sanity'
            },
            {
                icon: SiGithub,
                link: 'https://github.com/',
                name: 'GitHub'
            },
            {
                icon: SiFigma,
                link: 'https://www.figma.com/',
                name: 'Figma'
            },
            {
                icon: SiNotion,
                link: 'https://www.notion.so/',
                name: 'Notion'
            },
            {
                icon: SiTrello,
                link: 'https://trello.com/',
                name: 'Trello'
            },
            {
                icon: SiSass,
                link: 'https://sass-lang.com/',
                name: 'Sass'
            },
            {
                icon: SiCanva,
                link: 'https://www.canva.com/',
                name: 'Canva'
            }
        ]
    },
    {
        id: '5',
        title: 'I have experience working with',
        description: ' ',
        className: 'modul-card-experience',
        image: '',
        work: [
            {
                id: '101',
                description: 'project management',
            },
            {
                id: '102',
                description: 'team leadership',
            },
            {
                id: '103',
                description: 'problem solving',
            },
            {
                id: '104',
                description: 'decision making in stressed situations',
            },
            {
                id: '105',
                description: 'communication with clients',
            }
        ]
    },
    {
        id: '6',
        title: 'Stuff',
        description: 'I like doing besides work',
        className: 'modul-card-interests',
        image: '',
        interestImages: [
            {
                src: hiking,
                className: 'interest-image'
            },
            {
                src: climbing,
                className: 'interest-image'
            },
            {
                src: reading,
                className: 'interest-image'
            },
            {
                src: travel1,
                className: 'interest-image'
            },
            {
                src: camping,
                className: 'interest-image'
            }
        ]
    },
    {
        id: '7',
        title: 'Find me',
        description: '-',
        className: 'modul-card-findme',
        image: '',
        socialLinks: [
            {
                id: '201',
                icon: SiGithub,
                link: 'https://github.com/Flowerafro?tab=repositories'
            },
            {
                id: '202',
                icon: SiLinkedin,
                link: 'https://www.linkedin.com/in/line-henriksen-542a44290/'
            },
        ]
    }
]