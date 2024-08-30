import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            animation: {
                first: 'moveVertical 30s ease infinite',
                second: 'moveInCircle 20s reverse infinite',
                third: 'moveInCircle 40s linear infinite',
                fourth: 'moveHorizontal 40s ease infinite',
                fifth: 'moveInCircle 20s ease infinite',
            },
            spacing: {
                160: '10rem',
            },
            screens: {
                sm: '640px', // => @media (min-width: 640px) { ... }
                md: '768px', // => @media (min-width: 768px) { ... }
                lg: '1024px', // => @media (min-width: 1024px) { ... }
                xl: '1280px', // => @media (min-width: 1280px) { ... }
                '2xl': '1536px', // => @media (min-width: 1536px) { ... }
            },
            keyframes: {
                moveHorizontal: {
                    '0%': {
                        transform: 'translateX(-50%) translateY(-10%)',
                    },
                    '50%': {
                        transform: 'translateX(50%) translateY(10%)',
                    },
                    '100%': {
                        transform: 'translateX(-50%) translateY(-10%)',
                    },
                },
                moveInCircle: {
                    '0%': {
                        transform: 'rotate(0deg)',
                    },
                    '50%': {
                        transform: 'rotate(180deg)',
                    },
                    '100%': {
                        transform: 'rotate(360deg)',
                    },
                },
                moveVertical: {
                    '0%': {
                        transform: 'translateY(-50%)',
                    },
                    '50%': {
                        transform: 'translateY(50%)',
                    },
                    '100%': {
                        transform: 'translateY(-50%)',
                    },
                },
            },
        },
    },
    plugins: [],
};
export default config;
