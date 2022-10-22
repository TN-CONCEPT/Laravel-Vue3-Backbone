import vue from '@vitejs/plugin-vue'
import laravel from 'laravel-vite-plugin';
import {defineConfig} from 'vite';

export default defineConfig({
    plugins: [
        vue(),
        laravel([
            'resources/css/app.scss',
            'resources/js/app.ts',
        ]),
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
        }
    }
});