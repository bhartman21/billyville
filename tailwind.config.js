/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  safelist: [
    // Dynamic column span classes used by feature-card component
    'col-span-1', 'col-span-2', 'col-span-3', 'col-span-4', 'col-span-5', 'col-span-6',
    'sm:col-span-1', 'sm:col-span-2', 'sm:col-span-3', 'sm:col-span-4', 'sm:col-span-5', 'sm:col-span-6',
    'lg:col-span-1', 'lg:col-span-2', 'lg:col-span-3', 'lg:col-span-4', 'lg:col-span-5', 'lg:col-span-6',
    // Theme classes
    'theme-light', 'theme-dark', 'theme-scarlet', 'theme-gold',
  ],
  theme: {
    extend: {
      colors: {
        'usmc-scarlet': '#C41E3A',
        'usmc-scarlet-dark': '#9A1830',
        'usmc-scarlet-light': '#E63950',
        'usmc-gold': '#FFD700',
        'usmc-gold-dark': '#DAA520',
        'usmc-gold-light': '#FFE44D',
        'usmc-black': '#1A1A1A',
        'usmc-cream': '#FDF5E6',
      },
    },
  },
  plugins: [],
}
