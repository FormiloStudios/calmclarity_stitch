/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a', // Obsidian-like dark background
        foreground: '#e5e5e5', // Off-white/parchment for text
        primary: {
          DEFAULT: '#d4a373', // Earthy amber/gold accent
          foreground: '#0a0a0a',
        },
        secondary: {
          DEFAULT: '#2c2c2c', // Dark gray for cards/sections
          foreground: '#e5e5e5',
        },
        muted: {
            DEFAULT: '#737373',
            foreground: '#a3a3a3'
        },
        accent: {
            DEFAULT: '#d4a373',
            foreground: '#0a0a0a'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/path/to/hero-image.jpg')", // Placeholder
      }
    },
  },
  plugins: [],
}
