import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react({
      // Enable Fast Refresh
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
    // Watch options for better HMR
    watch: {
      usePolling: true,
      interval: 1000,
    },

    hmr: {
      overlay: true,
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});
