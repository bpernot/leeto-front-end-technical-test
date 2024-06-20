import react from "@vitejs/plugin-react"
import { defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    coverage: {
      reporter: ["text", "json", "html"],
      exclude: [
        "src/**/*.stories.{js,jsx,ts,tsx}",
        "src/**/index.{js,jsx,ts,tsx}",
        "src/**/*.d.ts",
        ".eslintrc.cjs",
        "postcss.config.js",
        "tailwind.config.js",
        ".storybook/**",
        "src/App.tsx",
        "src/main.tsx",
      ],
    },
  },
})
