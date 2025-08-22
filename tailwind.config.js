/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007AFF',
        'primary-dark': '#0056CC',
        secondary: '#5856D6',
        accent: '#34C759',
        warning: '#FF9500',
        danger: '#FF3B30',
        'dark-bg': '#000000',
        'dark-surface': '#1C1C1E',
        'dark-card': '#2C2C2E',
        'dark-border': '#38383A',
        'text-primary': '#FFFFFF',
        'text-secondary': '#EBEBF5',
        'text-muted': '#8E8E93',
      },
      fontFamily: {
        'sf': ['SF Pro Display', 'system-ui', 'sans-serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out',
        'slide-in-left': 'slide-in-left 0.8s ease-out',
        'slide-in-right': 'slide-in-right 0.8s ease-out',
        'subtle-glow': 'subtle-glow 3s ease-in-out infinite',
      },
      boxShadow: {
        'subtle': '0 4px 20px rgba(0, 0, 0, 0.3)',
        'elevated': '0 8px 40px rgba(0, 0, 0, 0.4)',
        'primary-glow': '0 0 20px rgba(0, 122, 255, 0.3)',
      },
      backgroundImage: {
        'subtle-gradient': 'linear-gradient(135deg, #000000 0%, #1C1C1E 100%)',
        'primary-subtle': 'linear-gradient(135deg, #007AFF 0%, #0056CC 100%)',
      },
      fontSize: {
        'display': ['clamp(2.5rem, 5vw, 4rem)', {
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        }],
        'heading': ['clamp(1.5rem, 3vw, 2.5rem)', {
          lineHeight: '1.2',
          letterSpacing: '-0.01em',
          fontWeight: '600',
        }],
      },
    },
  },
  plugins: [],
}
