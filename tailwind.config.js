/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Eco green color scheme (replacing orange)
        primary: '#22C55E', // Vibrant eco green
        'primary-dark': '#16A34A', // Darker eco green
        'primary-light': '#4ADE80', // Lighter eco green
        
        // Supporting colors from the design
        secondary: '#1E40AF', // Dark blue for "Plan based" text
        accent: '#22C55E', // Same as primary for consistency
        warning: '#F59E0B',
        danger: '#EF4444',
        
        // Background colors
        'bg-light': '#F8FAFC', // Light gray background
        'bg-grid': '#F1F5F9', // Slightly darker for grid pattern
        
        // Text colors
        'text-primary': '#1E293B', // Dark gray for main text
        'text-secondary': '#64748B', // Medium gray for secondary text
        'text-muted': '#94A3B8', // Light gray for muted text
        'text-white': '#FFFFFF',
        
        // Card and border colors
        'card-bg': '#FFFFFF',
        'border-light': '#E2E8F0',
        'border-medium': '#CBD5E1',
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
        'subtle': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'elevated': '0 8px 40px rgba(0, 0, 0, 0.15)',
        'primary-glow': '0 0 20px rgba(34, 197, 94, 0.3)',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
        'grid-bg': 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '20px 20px',
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
