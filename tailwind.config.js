/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primaryColor: '#2A2136',
      surfaceDarkColor: '#1A1520',
      primaryShadow: '0px 6px 28px 0px #00000005',
      lightTextColor: '#EBECEC80',
      blackWhiteColor: '#ffffff',
      primaryRed: '#FF5863',
      titleTextColor: '#EBECEC',
      bodyTextColor: '#EBECECCC',
      borderColor: '#352F3D',
      brandGreenColor: '#01C36D',
      transparent: 'transparent',
    },

    borderRadius: {
      'xs': '8px',
      'sm': '12px',
      'md': '24px'
    },
    extend: {
      backgroundImage: {
        primaryGradient: 'linear-gradient(180deg, #393046 0%, #2D2537 100%)',
        ctaGradient: 'linear-gradient(180deg, #01C36D 0%, #01C16C 0.01%, #019C57 100%)'
        
      }
    },
  },
  plugins: [],
}

