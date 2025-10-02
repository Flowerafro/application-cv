import type { Modul, Portfolio } from "../Types";
import { SiAdobe, SiGithub, SiFigma, SiNotion, SiTrello, SiSass, SiCanva, SiSanity, SiLinkedin } from "react-icons/si";

import p12 from '../assets/p-12.png';
import p21 from '../assets/p-21.png';
import p33 from '../assets/p-33.png';
import p42 from '../assets/p-42.png';
import p55 from '../assets/p-55.png';
import p63 from '../assets/p-62.png';

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
        title: 'Web news page',
        description: 'Exam project built with HTML, CSS and JS',
        image: p12,
        link: 'https://github.com/Flowerafro/kommunikasjonsdesign_thedailybugle',
    },
    {
        id: 'project-2',
        title: 'TwoFaced',
        description: 'Web design for the illustrator TwoFaced Artworks',
        image: p21,
        link: 'https://github.com/Flowerafro/TwoFacedArtworks',
    },
    {
        id: 'project-3',
        title: 'Web shop',
        description: 'Exam project built with HTML, CSS and JS',
        image: p33,
        link: 'https://github.com/Flowerafro/Webutvikling_eksamen_2024',
    },
    {
        id: 'project-4',
        title: 'Pokedex',
        description: 'Exam project with React and API',
        image: p42,
        link: 'https://github.com/Flowerafro/PokedexGR18',
    },
    {
        id: 'project-5',
        title: 'Laftemannen',
        description: 'Graphic design manual for Laftemannen AS',
        image: p55,
        link: '',
        pdf: '/Profilmanual.pdf',
    },
    {
        id: 'project-6',
        title: 'Company Website',
        description: 'A exam building a website for the company',
        image: p63,
        link: 'https://github.com/Flowerafro/webeksamen2023',
        pdf: '',
    }
]

// Helper: map portfolio items into Modul-shaped objects for UI reuse
export function getPortfolioAsModuls(): Modul[] {
    return portfolio.map((p, idx) => ({
        id: p.id ?? `p${idx + 1}`,
        title: p.title,
        description: p.description,
        className: `modul-card-portfolio ${p.id ?? `p${idx + 1}`}`,
        image: p.image,
        // put the portfolio item into the projects array so ModulCard can render actions (link/pdf)
        projects: [
            {
                title: p.title,
                description: p.description,
                image: p.image,
                link: p.link,
                pdf: p.pdf,
            },
        ],
    } as Modul));
}