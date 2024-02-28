import { defineConfig } from 'vite';

export const sharedConfig = defineConfig({
    base: './',
    build: { rollupOptions: { output: { manualChunks: { phaser: ['phaser'] } } } },
    clearScreen: false,
    plugins: [],
    server: { host: '0.0.0.0', port: 8080 },
});

export default sharedConfig;