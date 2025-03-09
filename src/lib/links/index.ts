import type { LinksType } from './types';

export const linkCategories:LinksType[] = [
    {
        name: {
            label: 'Infos',
            display: false
        },
        links: [
            {
                label: 'Limoges',
                data: 'N 45<span class="font-HelveticaNeue">°</span> 50\' 7.527 E 1<span class="font-HelveticaNeue">°</span> 15\' 52.144\'\'',
                url: 'https://www.google.fr/maps/place/Limoges',
                icon: 'pin'
            },
            {
                label: 'Gmail',
                data: 'vincent.ponty@gmail.com',
                url:'mailto:vincent.ponty@gmail.com',
                icon: 'email'
            },
            {
                label: 'Curriculum vitae',
                data: 'ponty_vincent_cv.pdf',
                url:'/ponty_vincent_cv.pdf',
                icon: 'curriculum-vitae'
            }
        ]
    },
    {
        name: {
            label: 'Online',
            display: true
        },
        links: [
            {
                label: 'Linkedin',
                data: 'vincent-ponty-80b62742',
                url: 'https://fr.linkedin.com/in/vincent-ponty-80b62742',
                icon: 'linkedin'
            },
            {
                label: 'Instagram',
                data: '@vince.pnt', 
                url: 'https://www.instagram.com/vince.pnt',
                icon: 'instagram'
            },
            {
                label: 'Github',
                data: 'vinceponty',
                url: 'https://github.com/vinceponty',
                icon: 'github'
            }
        ]
    },
    {
        name: {
            label: 'Offline',
            display: true
        },
        links: [
            {
                label: 'Tennis',
                data: '15/4',
                icon: 'tennis'
            },
            {
                label: 'Running',
                data: '10K - 49\'',
                icon: 'running'
            },
            {
                label: 'Natation',
                data: '~21 min/km',
                icon: 'swimming'
            },
            {
                label: 'Musique',
                data: 'vocal',
                icon: 'singer'
            }
        ]
    }
];