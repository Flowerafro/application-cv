import type { Modul } from "../Types";
import { SiAdobe, SiGithub, SiFigma, SiNotion, SiTrello, SiSass, SiCanva, SiSanity } from "react-icons/si";

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
        title: 'I have experience with',
        description: ' ',
        className: 'modul-card-experience',
        image: '',
        work: [
            {
                id: 'modul-4-work-1',
                description: 'Coordination and execution of events and performances',
            },
            {
                id: 'modul-4-work-2',
                description: 'team leadership and collaboration',
            },
            {
                id: 'modul-4-work-3',
                description: 'quick thinking and problem solving',
            },
            {
                id: 'modul-4-work-4',
                description: 'organizational skills and multitasking',
            },
            {
                id: 'modul-4-work-5',
                description: 'demonstrating precision and adherence to safety protocols',
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
        title: 'Employment',
        description: '',
        className: 'modul-card-employment',
        image: '',
        tagline: 'Flip to view last employers',
        employees: [
            {
                id: 'modul-6-employment-0',
                title: 'Sporveien',
                period: '2020 - 2025',
            },
            {
                id: 'modul-6-employment-1',
                title: 'Parkteatret SCENE AS',
                period: '2013 - 2020',
            },
            {
                id: 'modul-6-employment-2',
                title: 'Backstage M&P',
                period: '2017 - 2019',
            }
        ]
    }
]
