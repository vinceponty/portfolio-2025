import {ExperienceType} from './types';

const experiences: ExperienceType[] = [
    {
        dates: {
            start: '07.2021',
            end: '12.2024',
        },
        name: 'Iconosquare',
        link: 'https://www.iconosquare.com',
        jobs: [
            {
                name: 'Senior front end developer',
                description: 'Au sein d\'une équipe technique composée de développeurs back end et front end et en étroite collaboration avec une équipe de designers et de product managers, participation en méthode agile à la refonte, la maintenance et l\'évolution d\'une plateforme à destination des social media managers. Cet outil en ligne soumis à authentification et abonnement permet l\'agrégation, la gestion et l\'analyse de performance de réseaux sociaux ainsi que la programmation de publications et la génération de statistiques et rapports personnalisables.',
                skills: {
                    primary: ['react', 'tailwindcss', 'typescript', 'nextjs']
                }
            }
        ]
    },
    {
        dates: {
            start: '11.2018',
            end: '07.2021',
        },
        name: 'OD&B',
        link: 'https://www.odandb.com',
        jobs: [
            {
                name: 'Lead front end developer',
                description: 'Optimisation et évolution d\'une web app interne d\'un grand groupe bancaire permettant l\'analyse de performance de portefeuilles financiers de clients "grands comptes" et de simuler l\'impact d\'actions d\'investissement. Développement d\'une interface de contrôle et pilotage pour un système embarqué au sein d\'un robot permettant l\'automatisation de la manutention de palettes. Maintenance de diverses applications web ou hybrides.',
                skills: {
                    primary: ['angular', 'sass']
                }
            }
        ]
    },
    {
        dates: {
            start: '06.2014',
            end: '11.2018',
        },
        name: 'Emakina',
        link: 'https://www.emakina.com/fr-fr',
        jobs: [
            {
                dates: {
                    start: '01.2016',
                    end: '11.2018'
                },
                name: 'Front end Developer',
                description: 'Développement d\'une web app destinée àux employés d\'un grand groupe bancaire permettant d\'améliorer la soumission, l\'approbation et le traitement de feedbacks concernant le "bien-être au travail". Intégration de thèmes pour CMS ou de templates pour la conception de site web vitrines ou expérimentaux pour de grandes marques de la mode, du sport, de la cosmétique ou de la télécommunication.',
                skills: {
                    primary: ['angularjs', 'jquery', 'javascript']
                }
            },
            {
                dates: {
                    start: '06.2014',
                    end: '12.2015'
                },
                name: 'Back end developer',
                description: 'Développement en équipe d\'une plateforme communautaire destinée à l\'entre-aide et aux conseils entre PME. Création de back-offices et de modules customs pour des sites web sur Drupal.',
                skills: {
                    primary: ['symfony', 'drupal']
                }
            }
        ]
    },
    {
        dates: {
            start: '04.2013',
            end: '05.2014',
        },
        name: 'Pixine',
        link: 'https://www.pixine.fr',
        jobs: [
            {
                dates: {
                    start: '09.2013',
                    end: '05.2014'
                },
                name: 'Intégrateur et développeur web',
                description: 'Intégration responsive et développement de divers sites vitrines, e-commerces ou applicatifs. Mises à jour et webmastering sur des sites existants.',
                skills: {
                    primary: ['symfony', 'magento', 'jquery', 'javascript']
                }
            },
            {
                dates: {
                    start: '04.2013',
                    end: '07.2013'
                },
                name: 'Stagiaire en intégration et développement web',
                description: 'Intégration et adaptation de thèmes pour la création de boutiques en ligne. Apprentissage de Magento et des bases de Symfony2. Approfondissement des règles de qualité web.',
                skills: {
                    primary: ['magento', 'html', 'css']
                }
            }
        ]
    },
    {
        dates: {
            start: '09.2012',
            end: '04.2013',
        },
        isSchool: true,
        name: 'Licence Pro Webdesign Sensoriel et Stratégies de création en ligne',
        link: 'https://www.flsh.unilim.fr/wp-content/uploads/sites/9/2019/02/LICENCE-PRO-WEB-DESIGN.pdf'
    },
    {
        dates: {
            start: '03.2012',
            end: '06.2012',
        },
        name: 'OSCP',
        link: 'https://www.oscp.fr',
        jobs: [
            {
                name: 'Stagiaire en webdesign et intégration',
                description: 'Conception de maquettes de sites vitrines pour des artisans ou petits commerces. Découpe des maquettes. Intégration statique en html et css agrémentée d\'animations en javascript',
                skills: {
                    primary: ['html', 'css', 'photoshop']
                }
            }
        ]
    },
    {
        dates: {
            start: '09.2010',
            end: '03.2012',
        },
        isSchool: true,
        name: 'DUT Services et Réseaux de Communication',
        link: 'https://www.iut.unilim.fr/wp-content/uploads/sites/3/2019/07/DUT-MMI.pdf'
    },
    {
        dates: {
            start: '09.2008',
            end: '06.2010',
        },
        isSchool: true,
        name: 'Baccalauréat Scientifique'
    },
];

export default experiences;