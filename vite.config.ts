import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { tempo } from "tempo-devtools/dist/vite";

// Type the conditional plugins array
const conditionalPlugins: [string, Record<string, unknown>][] = [];
if (process.env.TEMPO === "true") {
  conditionalPlugins.push(["tempo-devtools/swc", {}]);
}

export default defineConfig({
  plugins: [
    react({
      plugins: conditionalPlugins,
    }),
    tempo(),
  ],
  base: "./",  // Updated base path for relative URLs
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    allowedHosts: process.env.TEMPO === "true" ? true : undefined,
  },
});
