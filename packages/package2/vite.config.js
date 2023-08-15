import { defineConfig } from "vite";
import path from "path";

export default defineConfig(({ command, mode, ssrBuild}) => {
    const isDevMode = mode === 'development';
    return {
        appType: 'spa',
        base: '/',
        server: {
            hmr: true,
            open: false,
            port: 3000,
            strictPort: true
        },
        root: path.resolve(process.cwd(),'./src'),
        build: {
            emptyOutDir: true,
            copyPublicDir: false,
            outDir: path.resolve(process.cwd(),'./build'),
            target: 'modules',
            assetsDir: 'assets',
            minify: 'esbuild'
        },
        mode: mode,
        resolve: {
            extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json']
        }
    }
})