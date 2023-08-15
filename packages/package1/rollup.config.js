const { defineConfig } = require('rollup');
const cleaner = require('rollup-plugin-cleaner');
const babel = require('@rollup/plugin-babel');
const html = require('@rollup/plugin-html');
const replace = require('@rollup/plugin-replace');
const terser = require('@rollup/plugin-terser');
const commonjs = require('@rollup/plugin-commonjs');
const serve = require('rollup-plugin-serve');
const path = require('path');

module.exports = defineConfig((context) => {
    const isDevMode = context.environment === 'development';
    return {
        input: {
            main : path.resolve(process.cwd(),'./src/index.js')
        },
        output: {
            dir: path.resolve(process.cwd(),'./build'),
            entryFileNames: 'js/main.js',
            esModule: 'if-default-prop',
            footer: '/* Power by Bui The Anh */',
            exports: 'auto',
            format: 'umd',
            name: 'myLibrary',
            generatedCode: {
                arrowFunctions: true,
                constBindings: true,
                objectShorthand: true,
                reservedNamesAsProps: true,
                symbols: true,
                preset: "es5"
            }
        },
        plugins: [
            cleaner({
                targets: [
                    path.resolve(process.cwd(),'./build')
                ]
            }),
            html(),
            serve({
                port: 3000,
                contentBase: ['./build']
            })
        ],
        watch: {
            buildDelay: 0,
            
        }
    }
})