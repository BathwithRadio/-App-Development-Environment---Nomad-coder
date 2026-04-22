import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const FULL_URL = "https://server.thigma1201.workers.dev/";

// https://vite.dev/config/
// with mode, you can have different configs for different environments - development, production, etc.
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base: mode === "production" ? FULL_URL : undefined,
    build: {
      outDir: "../server/dist",
      emptyOutDir: true,
    },
  };
});
