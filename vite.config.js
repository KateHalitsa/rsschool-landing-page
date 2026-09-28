import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',

  build: {
    sourcemap: true,
    minify: false,

    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        catalog: resolve(import.meta.dirname, 'catalog.html'),
      },
    },
  },
});