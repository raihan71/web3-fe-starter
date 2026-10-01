import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  // Resolves the `~/*` alias the same way the app build does.
  plugins: [tsconfigPaths()],
  test: {
    // The integration and data layer under app/lib is the test surface; the UI
    // is not. Widened from app/lib/rex when the receipts status mapper — the
    // thing that decides whether a live redemption reads as "Cancelled" —
    // turned out to live one directory up.
    include: ["app/lib/**/*.test.ts"],
    environment: "node",
  },
});
