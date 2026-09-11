/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          bg: '#FAFAF8',
          beige: '#F5F2EB',
          beigeDark: '#EAE5D9',
          card: '#FFFFFF',
        },
        gold: {
          50: '#FFFDF5',
          100: '#FDF6E2',
          200: '#F7E7B6',
          300: '#F0D482',
          400: '#E5BF51',
          500: '#C5A059',
          600: '#B45309',
          700: '#92400E',
          800: '#78350F',
          900: '#451A03',
        },
        forest: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
        },
        charcoal: {
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'card-soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 20px 30px -10px rgba(0, 0, 0, 0.08), 0 8px 12px -4px rgba(0, 0, 0, 0.04)',
        'gold-soft': '0 10px 25px -5px rgba(180, 83, 9, 0.15)',
      },
      backgroundImage: {
        'hero-light-overlay': 'linear-gradient(to right, rgba(250, 250, 248, 0.95) 0%, rgba(250, 250, 248, 0.88) 50%, rgba(250, 250, 248, 0.5) 100%)',
        'gold-accent': 'linear-gradient(135deg, #D97706 0%, #B45309 100%)',
      }
    },
  },
  plugins: [],
}
