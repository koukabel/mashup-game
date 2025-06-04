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
    allowedHosts: true,
    hmr: {
      clientPort: 5173,
      overlay: true,
      protocol: "ws",
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});
