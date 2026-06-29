import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '5rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: '#1B1B1B',
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#2a2a2a',
          900: '#1B1B1B',
          950: '#0d0d0d',
        },
        tan: {
          DEFAULT: '#8B6F47',
          50: '#faf6f0',
          100: '#f2e8d8',
          200: '#e4cfae',
          300: '#d3b07f',
          400: '#c2945a',
          500: '#b67f47',
          600: '#8B6F47',
          700: '#704e30',
          800: '#5e402c',
          900: '#503628',
          950: '#2c1b13',
        },
        cream: {
          DEFAULT: '#F5F2ED',
          50: '#fdfcfa',
          100: '#F5F2ED',
          200: '#ece6dc',
          300: '#dccfbb',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Editorial display scale — fluid clamp values tuned for premium feel
        'display-3xl': ['clamp(3.5rem, 8vw + 0.5rem, 9rem)', { lineHeight: '0.95', letterSpacing: '-0.035em' }],
        'display-2xl': ['clamp(3rem, 6.5vw + 0.5rem, 7.5rem)', { lineHeight: '0.98', letterSpacing: '-0.03em' }],
        'display-xl': ['clamp(2.5rem, 5vw + 0.25rem, 5.5rem)', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(2.25rem, 4vw + 0.25rem, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.75rem, 2.5vw + 0.5rem, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'display-sm': ['clamp(1.5rem, 1.5vw + 0.5rem, 2rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        // Refined body scale
        'body-xl': ['1.25rem', { lineHeight: '1.6', letterSpacing: '-0.005em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.65', letterSpacing: '-0.003em' }],
      },
      letterSpacing: {
        'wider-2': '0.15em',
        'wider-3': '0.22em',
        'wider-4': '0.32em',
      },
      maxWidth: {
        '8xl': '90rem',
        'prose-lg': '38rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '38': '9.5rem',
        '46': '11.5rem',
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(ellipse at center, rgba(245, 242, 237, 0.06) 0%, transparent 70%)',
        'gradient-dark': 'linear-gradient(180deg, rgba(13,13,13,0) 0%, rgba(13,13,13,0.85) 100%)',
        'gradient-vignette': 'radial-gradient(ellipse at center, transparent 30%, rgba(13,13,13,0.5) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        // Hero entrance — `both` fill-mode holds the start state during the
        // stagger delay (no flash) and lands on the final frame.
        'hero-up': 'fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) both',
        'hero-in': 'fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) both',
        'scroll-line': 'scrollLine 1.8s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
        'marquee': 'marquee 50s linear infinite',
        'subtle-zoom': 'subtleZoom 18s ease-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        subtleZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.06)' },
        },
        scrollLine: {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
  plugins: [],
}

export default config
