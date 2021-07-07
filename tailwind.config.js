module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      typography(theme) {
        return {
          DEFAULT: {
            css: {
              color: theme("colors.nord0"),
              '[class~="lead"]': {
                color: theme("colors.nord0"),
              },
              p: {
                color: theme("colors.nord0"),
              },
              h1: {
                color: theme("colors.nord0"),
              },
              h2: {
                color: theme("colors.nord0"),
              },
              h3: {
                color: theme("colors.nord0"),
              },
              h4: {
                color: theme("colors.nord0"),
              },
              h5: {
                color: theme("colors.nord0"),
              },
              h6: {
                color: theme("colors.nord0"),
              },
              a: {
                color: theme("colors.nord10"),
              },
              strong: {
                color: theme("colors.nord0"),
              },
              "ol > li::before": {
                color: theme("colors.nord2"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.nord2"),
              },
              hr: {
                borderColor: theme("colors.nord2"),
              },
              blockquote: {
                color: theme("colors.nord2"),
              },
              thead: {
                color: theme("colors.nord0"),
                borderBottomColor: theme("colors.nord1"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.nord2"),
              },
              "code::before": {
                content: '" "',
              },
              "code::after": {
                content: '" "',
              },
            },
          },
          dark: {
            css: {
              color: theme("colors.nord6"),
              '[class~="lead"]': {
                color: theme("colors.nord6"),
              },
              p: {
                color: theme("colors.nord6"),
              },
              h1: {
                color: theme("colors.nord6"),
              },
              h2: {
                color: theme("colors.nord6"),
              },
              h3: {
                color: theme("colors.nord6"),
              },
              h4: {
                color: theme("colors.nord6"),
              },
              h5: {
                color: theme("colors.nord6"),
              },
              h6: {
                color: theme("colors.nord6"),
              },
              a: {
                color: theme("colors.nord9"),
              },
              strong: {
                color: theme("colors.nord6"),
              },
              "ol > li::before": {
                color: theme("colors.nord4"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.nord4"),
              },
              hr: {
                borderColor: theme("colors.nord4"),
              },
              blockquote: {
                color: theme("colors.nord4"),
              },
              thead: {
                color: theme("colors.nord6"),
                borderBottomColor: theme("colors.nord5"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.nord4"),
              },
              "code::before": {
                content: '" "',
              },
              "code::after": {
                content: '" "',
              },
            },
          },
        }
      },
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwind-nord")],
}
