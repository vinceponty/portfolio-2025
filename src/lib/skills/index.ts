import type { SkillType } from './types';

const skills = {
    typescript: {
        label: 'TypeScript',
        color: 'sky-500',
        icon: 'typescript'
    },
    jquery: {
        label: 'jQuery',
        color: 'sky-600',
        icon: 'jquery'
    },
    drupal: {
        label: 'Drupal',
        color: 'sky-400',
        icon: 'drupal'
    },
    css: {
        label: 'CSS3',
        color: 'cyan-400',
        icon: 'css'
    },
    react: {
        label: 'React',
        color: 'cyan-300',
        icon: 'react'
    },
    tailwindcss: {
        label: 'Tailwindcss',
        color: 'cyan-500',
        icon: 'tailwindcss'
    },
    html: {
        label: 'HTML5',
        color: 'orange-400',
        icon: 'html'
    },
    magento: {
        label: 'Magento',
        color: 'orange-500',
        icon: 'magento'
    },
    photoshop: {
        label: 'Adobe Photoshop',
        color: 'blue-600',
        icon: 'photoshop'
    },
    nextjs: {
        label: 'Next.js',
        color: 'zinc-100',
        icon: 'nextjs'
    },
    symfony: {
        label: 'Symfony',
        color: 'stone-100',
        icon: 'symfony'
    },
    angular: {
        label: 'Angular',
        color: 'red-600',
        icon: 'angular'
    },
    angularjs: {
        label: 'AngularJS',
        color: 'red-500',
        icon: 'angular'
    },
    javascript: {
        label: 'JavaScript',
        color: 'yellow-400',
        icon: 'javascript'
    },
    sass: {
        label: 'Sass',
        color: 'pink-400',
        icon: 'sass'
    }
} satisfies Record<string, SkillType>;

export default skills;