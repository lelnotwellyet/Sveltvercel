import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      'string-width': 'string-width/index.js',
    },
  },
  optimizeDeps: {
    include: ['string-width', 'wide-align'],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true, // Ensure mixed ESM/CommonJS modules are handled
    },
