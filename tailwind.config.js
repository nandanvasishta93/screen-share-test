export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        panelIn: {
          "0%": {
            opacity: 0,
            transform: "translateY(40px) scale(0.95)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0) scale(1)",
          },
        },
        fadeUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(24px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        videoIn: {
          "0%": {
            opacity: 0,
            transform: "scale(0.92)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)",
          },
        },
        glowPulse: {
          "0%, 100%": {
            boxShadow: "0 0 60px rgba(16,185,129,0.35)",
          },
          "50%": {
            boxShadow: "0 0 140px rgba(16,185,129,0.6)",
          },
        },
      },
      animation: {
        panelIn: "panelIn 0.6s cubic-bezier(.22,1,.36,1) forwards",
        fadeUp: "fadeUp 0.5s ease-out forwards",
        videoIn: "videoIn 0.5s ease-out forwards",
        glowPulse: "glowPulse 2.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
