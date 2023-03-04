/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal",
        square: "square",
        roman: "upper-roman",
      },
      colors: {
        primary: "#003591",
        dark: "#1D1D1B",
        darkPrimary: "#014284",
        secondary: "#0959AB",
        gray: "#494949",
        offWhite: "#F3F3F3",
        bgOff: "#F0F3F9",
        borderc: "#DCEAF6",
        lightbg: "#EDF6FF",
        cyanbg: "#05B4FF",
        card: "#f0f4f7",
      },
      boxShadow: {
        card: "0px 10px 20px rgba(0, 74, 149, 0.08);",
        card2: " 0px 10px 20px rgba(0, 74, 149, 0.05);",
        outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
        "outline-primary": "0 0 0 2px hsl(174, 100%, 40%)",
        "outline-danger": "0 0 0 3px hsl(0, 64%, 70%) ",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        20: "repeat(20, minmax(0, 1fr))",
      },
      fontSize: {
        bigH: "52px",
        smallH: "42px",
        smaller: "12px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1880px",
      },
      backgroundImage: {
        noisy2: "url('/images/Noisy Background.png')",
        vortila: "url('/images/Rectangle 154.png')",
        customers: "url('/images/Green-Noisy-Bg.jpg')",
        noisy: "url('/images/Noisy Dark Bg.png')",
        noisy3: "url('/images/Noisy Bg3.png')",
        whitebg: "url('/images/White Bg.png')",
        Blogbg: "url('/images/blog.png')",
        allgraybg: "url('/images/Noisy Bggray.png')",
        blacknoisy: "url('/images/Noisyblack.png')",
        noisy_gray: "url('/images/noisy_Bg.webp')",
      },
    },
  },
  variants: {
    backgroundColor: ["hover", "active", "focus", "disabled"],
    textColor: ["hover", "active", "focus", "disabled"],
    opacity: ["disabled"],
    cursor: ["disabled"],
    boxShadow: ["hover", "disabled", "focus"],
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
