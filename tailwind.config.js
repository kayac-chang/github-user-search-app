module.exports = {
  mode: "jit",
  purge: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: {
          lightest: "#FEFEFE",
          lighter: "#F6F8FF",
          light: "#697C9A",
          dark: "#2B3442",
          darker: "#F6F8FF",
        },

        blue: {
          light: "#0079FF",
          dark: "#4B6A9B",
          darker: "#1E2A47",
        },
      },
    },
  },
  plugins: [],
};
