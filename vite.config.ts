import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import vitePluginBundleObfuscator from "vite-plugin-bundle-obfuscator";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), vitePluginBundleObfuscator()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    chunkSizeWarningLimit: 10000,
    sourcemap: false,
    ssr: false,
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
  },
});
