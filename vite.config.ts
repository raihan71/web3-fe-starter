import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import vitePluginBundleObfuscator from "vite-plugin-bundle-obfuscator";
import { createHtmlPlugin } from "vite-plugin-html";

// Simplified configurations
const minimizeObfuscatorConfig = {
  autoExcludeNodeModules: true,
  // autoExcludeNodeModules: { enable: true, manualChunks: ['vue'] }
  threadPool: true,
  // threadPool: { enable: true, size: 4 }
};

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    vitePluginBundleObfuscator(minimizeObfuscatorConfig),
    createHtmlPlugin({
      minify: true,
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    chunkSizeWarningLimit: 10000,
    sourcemap: false,
    ssr: true,
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
  },
});
