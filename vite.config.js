import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
  },
  server: {
    strictPort: true,
    hmr: {
      port: 443 // Run the websocket server on the SSL port
    },
    proxy: {
      '/api': {
        target: 'http://localhost:5000', 
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  },
  
});
