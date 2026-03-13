/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				display: ['"Bebas Neue"', "cursive"],
				mono: ['"DM Mono"', "monospace"],
				sans: ['"Noto Sans JP"', "sans-serif"],
			},
			colors: {
				bg: "#0a0a0f",
				surface: "#111118",
				surface2: "#18181f",
				accent: "#00e5ff",
				violet: "#7c3aed",
				amber: "#f59e0b",
				muted: "#6b6b80",
				border: "rgba(255,255,255,0.06)",
			},
			keyframes: {
				fadeUp: {
					from: { opacity: "0", transform: "translateY(16px)" },
					to: { opacity: "1", transform: "translateY(0)" },
				},
				pulse: {
					"0%, 100%": { boxShadow: "0 0 6px #10b981" },
					"50%": { boxShadow: "0 0 18px #10b981" },
				},
			},
			animation: {
				fadeUp: "fadeUp 0.5s ease both",
				pulse: "pulse 2s infinite",
			},
		},
	},
	plugins: [],
};
