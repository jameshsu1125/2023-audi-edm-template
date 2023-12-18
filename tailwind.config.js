/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
import color from 'tailwindcss/colors';
import { fontSize } from 'tailwindcss/defaultTheme';

delete color.lightBlue;
delete color.warmGray;
delete color.trueGray;
delete color.coolGray;
delete color.blueGray;

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: ['nord'],
  },
  theme: {
    fontSize: {
      ...fontSize,
    },
    extend: {},
  },
  plugins: [require('daisyui'), 'prettier-plugin-tailwindcss'],
};
