import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react({
      fastRefresh: true,
    }),
  ],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@services": path.resolve(__dirname, "src/services"),
    },
  },
  server: {
    host: true, // Listen on all network interfaces
    allowedHosts: "jesus.home", // Allow all hosts
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true, // Required for Docker
      interval: 1000,
    },
    hmr: {
      clientPort: 5173, // Important for Docker
      overlay: true,
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});
