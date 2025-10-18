module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f9fafb',
        'gradient-hero': 'linear-gradient(90deg, #4f46e5 0%, #3b82f6 100%)',
        'gradient-primary': 'linear-gradient(90deg, #3b82f6 0%, #4f46e5 100%)',
        'gradient-cta': 'linear-gradient(90deg, #3b82f6 0%, #4f46e5 100%)',
        'shadow-soft': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'shadow-strong': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      boxShadow: {
        'soft': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'medium': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'strong': '0 4px 8px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'scale-in': 'scaleIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}