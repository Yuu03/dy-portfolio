import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// Replace 'dy-portfolio' with your actual GitHub repo name
export default defineConfig({
	plugins: [react()],
	base: "/dy-portfolio/",
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
