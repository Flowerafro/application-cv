import type { Portfolio } from "../Types";

import p10 from '../assets/p-10.png';
import p11 from '../assets/p-11.png';
import p12 from '../assets/p-12.png';
import p13 from '../assets/p-13.png';
import p14 from '../assets/p-14.png';
import p15 from '../assets/p-15.png';
import p16 from '../assets/p-16.png';

import p20 from '../assets/p-20.png';
import p21 from '../assets/p-21.png';
import p22 from '../assets/p-22.png';
import p23 from '../assets/p-23.png';

import p30 from '../assets/p-30.png';
import p31 from '../assets/p-31.png';
import p32 from '../assets/p-32.png';
import p33 from '../assets/p-33.png';

import p40 from '../assets/p-40.png';
import p41 from '../assets/p-41.png';
import p42 from '../assets/p-42.png';

import p50 from '../assets/p-50.png';
import p51 from '../assets/p-51.png';
import p52 from '../assets/p-52.png';
import p53 from '../assets/p-53.png';
import p54 from '../assets/p-54.png';
import p55 from '../assets/p-55.png';
import p56 from '../assets/p-56.png';
import p57 from '../assets/p-57.png';

import p60 from '../assets/p-60.png';
import p61 from '../assets/p-61.png';
import p62 from '../assets/p-62.png';
import p63 from '../assets/p-63.png';

import p70 from '../assets/p-70.png';
import p71 from '../assets/p-71.png';
import p72 from '../assets/p-72.png';
import p73 from '../assets/p-73.png';
import p74 from '../assets/p-74.png';
import p75 from '../assets/p-75.png';
import p76 from '../assets/p-76.png';
import p77 from '../assets/p-77.png';


export const portfolio: Portfolio[] = [
    {
        id: 'project-1',
        title: 'News web site',
        description: 'Communication design exam project built with HTML, CSS and JS',
        image: '',
        images: [
            {
                id: 'project-1-image-0',
                src: p10,
                className: 'portfolio-image',
            },
            {
                id: 'project-1-image-1',
                src: p11,
                className: 'portfolio-image',
            },
            {
                id: 'project-1-image-2',
                src: p12,
                className: 'portfolio-image',
            },
            {
                id: 'project-1-image-3',
                src: p13,
                className: 'portfolio-image',
            },
            {
                id: 'project-1-image-4',
                src: p14,
                className: 'portfolio-image',
            },
            {
                id: 'project-1-image-5',
                src: p15,
                className: 'portfolio-image',
            },
            {
                id: 'project-1-image-6',
                src: p16,
                className: 'portfolio-image',
            }
        ],
        link: 'https://github.com/Flowerafro/kommunikasjonsdesign_thedailybugle',
    },
    {
        id: 'project-2',
        title: 'TwoFaced Artworks',
        description: 'Web design for the illustrator TwoFaced Artworks. Built with React, SASS and Sanity',
        image: '',
        images: [
            {
                id: 'project-2-image-0',
                src: p20,
                className: 'portfolio-image',
            },
            {
                id: 'project-2-image-1',
                src: p21,
                className: 'portfolio-image',
            },
            {
                id: 'project-2-image-2',
                src: p22,
                className: 'portfolio-image',
            },
            {
                id: 'project-2-image-3',
                src: p23,
                className: 'portfolio-image',
            }

        ],
        link: 'https://github.com/Flowerafro/TwoFacedArtworks',
    },
    {
        id: 'project-3',
        title: 'Web shop',
        description: 'Exam project: building a web shop with HTML, CSS and JS',
        image: '',
        images: [
            {
                id: 'project-3-image-0',
                src: p30,
                className: 'portfolio-image',
            },
            {
                id: 'project-3-image-1',
                src: p31,
                className: 'portfolio-image',
            },
            {
                id: 'project-3-image-2',
                src: p32,
                className: 'portfolio-image',
            },
            {
                id: 'project-3-image-3',
                src: p33,
                className: 'portfolio-image',
            }
        ],
        link: 'https://github.com/Flowerafro/Webutvikling_eksamen_2024',
    },
    {
        id: 'project-4',
        title: 'Pokedex',
        description: 'Exam project: building a Pokedex with React, Sanity and API',
        image: '',
        images: [
            {
                id: 'project-4-image-0',
                src: p40,
                className: 'portfolio-image',
            },
            {
                id: 'project-4-image-1',
                src: p41,
                className: 'portfolio-image',
            }, {
                id: 'project-4-image-2',
                src: p42,
                className: 'portfolio-image',
            }
        ],
        link: 'https://github.com/Flowerafro/PokedexGR18',
    },
    {
        id: 'project-5',
        title: 'Laftemannen',
        description: 'Exam project: A graphic design manual for Laftemannen Company using ADOBE ID/AI/PS',
        image: '',
        images: [
            {
                id: 'project-5-image-0',
                src: p50,
                className: 'portfolio-image',
            },
            {
                id: 'project-5-image-1',
                src: p51,
                className: 'portfolio-image',
            },
            {
                id: 'project-5-image-2',
                src: p52,
                className: 'portfolio-image',
            },
            {
                id: 'project-5-image-3',
                src: p53,
                className: 'portfolio-image',
            },
            {
                id: 'project-5-image-4',
                src: p54,
                className: 'portfolio-image',
            },
            {
                id: 'project-5-image-5',
                src: p55,
                className: 'portfolio-image',
            },
            {
                id: 'project-5-image-6',
                src: p56,
                className: 'portfolio-image',
            },
            {
                id: 'project-5-image-7',
                src: p57,
                className: 'portfolio-image',
            }
        ],
        link: '',
        pdf: '/application-cv/Profilmanual.pdf',
    },
    {
        id: 'project-6',
        title: 'Company Website',
        description: 'Exam project: building a website for a fake company using HTML, CSS and JS',
        image: '',
        images: [
            {
                id: 'project-6-image-0',
                src: p60,
                className: 'portfolio-image',
            },
            {
                id: 'project-6-image-1',
                src: p61,
                className: 'portfolio-image',
            },
            {
                id: 'project-6-image-2',
                src: p62,
                className: 'portfolio-image',
            },
            {
                id: 'project-6-image-3',
                src: p63,
                className: 'portfolio-image',
            }
        ],
        link: 'https://github.com/Flowerafro/webeksamen2023',
        pdf: '',
    },
    {
        id: 'project-7',
        title: 'Contract Flow',
        description: 'Exam project: building a logistics application with React, RedwoodSDK, Drizzle, Cloudflare. Wireframes from Figma',
        image: '',
        images: [
            {
                id: 'project-7-image-0',
                src: p70,
                className: 'portfolio-image',
            },
            {
                id: 'project-7-image-1',
                src: p71,
                className: 'portfolio-image',
            },
            {
                id: 'project-7-image-2',
                src: p72,
                className: 'portfolio-image',
            },
            {
                id: 'project-7-image-3',
                src: p73,
                className: 'portfolio-image',
            },
            {
                id: 'project-7-image-4',
                src: p74,
                className: 'portfolio-image',
            },
            {
                id: 'project-7-image-5',
                src: p75,
                className: 'portfolio-image',
            },
            {
                id: 'project-7-image-6',
                src: p76,
                className: 'portfolio-image',
            },
            {
                id: 'project-7-image-7',
                src: p77,
                className: 'portfolio-image',
            }
        ],
        link: 'https://github.com/Flowerafro/webeksamen2023',
        pdf: '',
    }
]
