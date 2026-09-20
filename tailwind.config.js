/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F5F3ED',
          dark: '#EAE6DC',
          darker: '#DFD9CB',
          card: '#FAF8F3',
          pure: '#FFFFFF'
        },
        ink: {
          DEFAULT: '#171513',
          muted: '#5A5650',
          light: '#8A857C',
          subtle: '#B5AFA4'
        },
        brand: {
          yellow: '#F4C542',
          'yellow-light': '#FDF3D0',
          blue: '#3157D5',
          'blue-light': '#E8ECF9',
          green: '#8BC9A7',
          'green-light': '#EBF6F0',
          pink: '#F47C8C',
          'pink-light': '#FDEBEC'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Sora', 'sans-serif'],
        mono: ['IBM Plex Mono', 'Courier New', 'monospace'],
        hand: ['Caveat', 'Patrick Hand', 'cursive']
      },
      boxShadow: {
        'paper-sm': '2px 2px 0px #171513',
        'paper': '4px 4px 0px #171513',
        'paper-lg': '6px 6px 0px #171513',
        'paper-xl': '10px 10px 0px #171513',
        'paper-yellow': '4px 4px 0px #F4C542',
        'paper-blue': '4px 4px 0px #3157D5',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' }
        }
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        float: 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
