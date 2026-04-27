import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // We keep `.env` at the repo root (../.env). Tell Vite to load env vars from there.
  envDir: path.resolve(__dirname, ".."),
  plugins: [
    tsConfigPaths(),
    tanstackStart(),
    // Vercel deploy support (SSR/server functions) via Nitro
    nitro(),
    // React plugin must come after tanstackStart()
    viteReact(),
    tailwindcss(),
  ],
});
