import { defineConfig, Plugin } from 'vite';
import sharedConfig from './config.shared';

const phasermsg = (): Plugin => ({
    label: 'phasermsg',
    buildStart: () => {
        process.stdout.write(`Building for production...\n`);
    },
    buildEnd: () => {
        const line = '---------------------------------------------------------';
        const msg = `❤️❤️❤️ Tell us about your game! - games@phaser.io ❤️❤️❤️`;
        process.stdout.write(`${line}\n${msg}\n${line}\n`);

        process.stdout.write(`✨ Done ✨\n`);
    },
});

export default defineConfig({
    ...sharedConfig,
    logLevel: 'warn',
    build: {
        ...sharedConfig.build,
        minify: 'terser',
        terserOptions: {
            compress: { passes: 2 },
            mangle: true,
            format: { comments: false },
        },
    },
    plugins: [phasermsg()],
});
