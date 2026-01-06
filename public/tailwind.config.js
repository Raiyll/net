/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './resources/**/*.{js,ts,jsx,tsx}', // biar Tailwind scan semua komponen lo
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('tailwind-scrollbar-hide'), // buat ngilangin scrollbar
    ],
  };
  