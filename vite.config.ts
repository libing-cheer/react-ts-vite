import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    minify: 'esbuild',
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "https://yourBaseUrl",
        changeOrigin: true,
        cookieDomainRewrite: "",
        secure: false,
      },
    },
  },
});
