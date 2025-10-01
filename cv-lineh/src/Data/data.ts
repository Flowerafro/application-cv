import type { Modul, Portfolio } from "../Types";
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
        id: 'modul-1',
        title: 'Bachelor\'s Degree',
        description: 'in Information systems HIOF',
        className: 'modul-card-education',
        image: '',
        icon: diploma,
    },
    {
        id: 'modul-2',
        title: ' ',
        description: 'I mostly code with',
        className: 'modul-card-coding',
        image: '',
    },
    {
        id: 'modul-3',
        title: 'Tools',
        description: 'but I also worked with these',
        className: 'modul-card-tools',
        image: '',
        tools: [
            {
                id: 'modul-3-tool-1',
                icon: SiAdobe,
                link: 'https://www.adobe.com/',
                name: 'Adobe'
            },
            {
                id: 'modul-3-tool-2',
                icon: SiSanity,
                link: 'https://www.sanity.io/',
                name: 'Sanity'
            },
            {
                id: 'modul-3-tool-3',
                icon: SiGithub,
                link: 'https://github.com/',
                name: 'GitHub'
            },
            {
                id: 'modul-3-tool-4',
                icon: SiFigma,
                link: 'https://www.figma.com/',
                name: 'Figma'
            },
            {
                id: 'modul-3-tool-5',
                icon: SiNotion,
                link: 'https://www.notion.so/',
                name: 'Notion'
            },
            {
                id: 'modul-3-tool-6',
                icon: SiTrello,
                link: 'https://trello.com/',
                name: 'Trello'
            },
            {
                id: 'modul-3-tool-7',
                icon: SiSass,
                link: 'https://sass-lang.com/',
                name: 'Sass'
            },
            {
                id: 'modul-3-tool-8',
                icon: SiCanva,
                link: 'https://www.canva.com/',
                name: 'Canva'
            }
        ]
    },
    {
        id: 'modul-4',
        title: 'I have experience working with',
        description: ' ',
        className: 'modul-card-experience',
        image: '',
        work: [
            {
                id: 'modul-4-work-1',
                description: 'project management',
            },
            {
                id: 'modul-4-work-2',
                description: 'team leadership',
            },
            {
                id: 'modul-4-work-3',
                description: 'problem solving',
            },
            {
                id: 'modul-4-work-4',
                description: 'decision making in stressed situations',
            },
            {
                id: 'modul-4-work-5',
                description: 'communication with clients',
            }
        ]
    },
    {
        id: 'modul-5',
        title: 'Stuff',
        description: 'I like doing besides work',
        className: 'modul-card-interests',
        image: '',
        interestImages: [
            {
                id: 'modul-5-interest-1',
                src: hiking,
                className: 'interest-image'
            },
            {
                id: 'modul-5-interest-2',
                src: climbing,
                className: 'interest-image'
            },
            {
                id: 'modul-5-interest-3',
                src: reading,
                className: 'interest-image'
            },
            {
                id: 'modul-5-interest-4',
                src: travel1,
                className: 'interest-image'
            },
            {
                id: 'modul-5-interest-5',
                src: camping,
                className: 'interest-image'
            }
        ]
    },
    {
        id: 'modul-6',
        title: 'Find me',
        description: '-',
        className: 'modul-card-findme',
        image: '',
        socialLinks: [
            {
                id: 'modul-6-social-1',
                icon: SiGithub,
                link: 'https://github.com/Flowerafro?tab=repositories'
            },
            {
                id: 'modul-6-social-2',
                icon: SiLinkedin,
                link: 'https://www.linkedin.com/in/line-henriksen-542a44290/'
            },
        ]
    }
]

export const portfolio: Portfolio[] = [
    {
        id: 'project-1',
        title: 'project1',
        description: 'description',
        image: bugle,
        link: 'https://github.com/Flowerafro/kommunikasjonsdesign_thedailybugle',
    },
    {
        id: 'project-2',
        title: 'Simple web shop',
        description: 'Description of Project 2',
        image: webshop,
        link: '',
    },
    {
        id: 'project-3',
        title: 'Project 3',
        description: 'Description of Project 3',
        image: '',
        link: '',
    },
    {
        id: 'project-4',
        title: 'Project 4',
        description: 'Description of Project 4',
        image: '',
        link: '',
    },
    {
        id: 'project-5',
        title: 'Project 5',
        description: 'Description of Project 5',
        image: '',
        link: '',
    }
]

// Helper: map portfolio items into Modul-shaped objects for UI reuse
export function getPortfolioAsModuls(): Modul[] {
    return portfolio.map((p, idx) => ({
        id: p.id ?? `p${idx + 1}`,
        title: p.title,
        description: p.description,
        className: 'modul-card',
        image: p.image,
    } as Modul));
}