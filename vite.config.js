import { defineConfig } from 'vite'
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@assets': path.resolve(__dirname, './src/resources'),
            '@components': path.resolve(__dirname, './src/components'),
            '@core': path.resolve(__dirname, './src/core'),
            '@styles': path.resolve(__dirname, './src/styles'),
        },
    },
    plugins: []
})