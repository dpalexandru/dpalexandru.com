// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    // aggiungi qui il percorso ai tuoi componenti
  ],
  theme: {
    extend: {
      fontFamily: {
        // definisci un alias “sans” che punti a Inter
        sans: ['Inter', 'sans-serif'],
        // se vuoi aggiungere altri alias, es:
        // poppins: ['Poppins', 'sans-serif'],
        // rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
