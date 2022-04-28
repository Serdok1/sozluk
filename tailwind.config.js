module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      width: {
        searchbox: '936px',
        wordcard: '1250px',
        wordcardxl: '1350px'
      },
      height: {
        wordcard: '640px',
      },
      fontsize: {
        baslik: '75px'
      },
    },
  },
  plugins: [],
}
