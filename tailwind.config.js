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
      boxShadow: {
        DEFAULT: `0px 4px 4px 0px rgba(0, 0, 0, 0.25)`,
        sm: `0px 16px 30px -10px rgba(70, 96, 187, 0.198567)`,
      },
    },
  },
  plugins: [],
};
