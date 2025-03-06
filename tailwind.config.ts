import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        fluo: {
          DEFAULT: '#00E502'
        }
      },
      backgroundImage: {
        topography: 'url("/images/topography.svg")',
        mainGradient:'linear-gradient(205deg, rgb(231, 229, 228, 1) 0%, rgb(231, 229, 228, 0.9) 80%, transparent 100%);'
      },
      fontFamily: {
        HelveticaNeue: ['var(--font-helvetica-neue)'],
        Default: 'Arial, Helvetica, sans-serif'
      },
      fontSize: {
        '10': '10px',
        '13': '13px',
        '15': '15px',
        '22': '22px'
      },
      zIndex: {
        '-1': '-1'
      },
    }
  }
} satisfies Config;
