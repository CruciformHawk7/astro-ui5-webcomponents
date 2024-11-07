// @ts-check
import { defineConfig } from 'astro/config';
import {viteStaticCopy} from 'vite-plugin-static-copy';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [
            viteStaticCopy({
                targets: [{
                    src: 'node_modules/@ui5/webcomponents/dist/**/*',
                    dest: './@ui5/webcomponents/'
                }]
            }),
        ],
    }
});
