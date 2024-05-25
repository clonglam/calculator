/// <reference types="vitest" />
/// <reference types="vite/client" />

import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import viteTsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  base: "./",
  plugins: [react(), viteTsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@server": path.resolve(__dirname, "../server"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
})
