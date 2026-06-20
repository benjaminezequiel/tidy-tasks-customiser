import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// `base` must match where the site is served from on GitHub Pages:
//   • Project page  https://<user>.github.io/<repo>/   -> base = "/<repo>/"
//   • User/org page https://<user>.github.io/          -> base = "/"
//   • Custom domain                                    -> base = "/"
// The deploy workflow passes BASE_PATH automatically for project pages.
export default defineConfig({
  base: process.env.BASE_PATH || '/tidy-tasks-customiser/',
  plugins: [vue()],
  // Dart Sass ships a browser build; keep function names so it runs un-mangled.
  esbuild: { keepNames: true },
  optimizeDeps: { esbuildOptions: { keepNames: true } }
});
