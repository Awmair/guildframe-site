import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // Public images are pre-optimized before the static Cloudflare Pages build.
    rules: {
      "@next/next/no-img-element": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "dist/**",
    ".vinext/**",
    ".wrangler/**",
    ".openai/**",
    "branding/**",
    "checkpoints/**",
    "db/**",
    "drizzle/**",
    "examples/**",
    "worker/**",
    "next-env.d.ts",
    "app/chatgpt-auth.ts",
    "drizzle.config.ts",
    "vite.config.ts",
  ]),
]);

export default eslintConfig;
