import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
  server: {
    host: '0.0.0.0', // Bind to all network interfaces
    port: 5173, // Ensure this matches the port you're mapping
  },
});
