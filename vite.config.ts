import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [sveltekit()],
    build: {
        outDir: 'dist',  // Customize your output directory
        sourcemap: true,  // Enable source maps if needed
    },
});
