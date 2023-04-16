import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { mapToken } from "./staticCustomer";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/monster-admin-frontend/",
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: mapToken,
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: true,
    proxy: {
      "/api": {
        target: 'http://localhost:8080',
        changeOrigin: true,
      }
    },
  },
});
