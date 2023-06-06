import { defineConfig } from "vitest/config";
// import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    coverage: {
      reporter: ["text", "html"],
    },
    setupFiles: "./src/tests/setup.jsx",
  },
});
