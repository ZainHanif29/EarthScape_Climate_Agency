module.exports = {
	darkMode: ["class"], // Enable dark mode if needed
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Adjust paths as necessary
	theme: {
	  extend: {
		colors: {
		  palette: {
			navy: "#222831", // Dark Navy
			gray: "#393E46", // Charcoal Gray
			turquoise: "#00ADB5", // Turquoise Blue
			light: "#EEEEEE", // Light Gray
		  },
		},
	  },
	},
	plugins: [require('tailwindcss-animate')],
  };
  