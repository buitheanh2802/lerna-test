const { defineConfig } = require('rollup');
const cleaner = require('rollup-plugin-cleaner');
const babel = require('@rollup/plugin-babel');
const path = require('path');

module.exports = defineConfig((context) => {
    const isDevMode = context.environment === 'development';
    return {
        input: {
            main : path.resolve(process.cwd(),'./src/index.tsx')
        },
        output: {
            dir: path.resolve(process.cwd(),'./build'),
            entryFileNames: 'js/main.js',
            esModule: 'if-default-prop',
            footer: 'Power by Bui The Anh',
            exports: 'auto',
            format: 'umd',
            // generatedCode: {
            //     arrowFunctions: false,
            //     constBindings: false,
            //     objectShorthand: false,
            //     reservedNamesAsProps: false,
            //     symbols: false,
            //     preset: "es5"
            // }
        },
        plugins: [
            cleaner({
                targets: [
                    path.resolve(process.cwd(),'./build')
                ]
            })
        ]
    }
})