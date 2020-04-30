import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import uglify from 'rollup-plugin-uglify'
import replace from 'rollup-plugin-replace'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import simple from 'postcss-simple-vars'
import nested from 'postcss-nested'
// import serve from 'rollup-plugin-serve'
// import livereload from 'rollup-plugin-livereload'
// import html2 from 'rollup-plugin-html2'

export default {
    input: 'src/main.ts',
    output: [{
        file: 'dist/uii.js',
        format: 'cjs',
        name: 'uii',
        sourcemap: true
    }, {
        file: 'dist/uii.min.js',
        format: 'umd',
        name: 'uii',
        sourcemap: true,
        plugins: [
            terser()
        ]
    }],
    plugins: [
        typescript(),
        resolve(),        
        json(),
        
        replace({
            exclude: 'node_modules/**',
            ENV: JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        (process.env.NODE_ENV === 'production' && uglify()),
        postcss({
            plugins: [simple(), nested(), autoprefixer(), cssnano()],
            extract: 'style/uii.css'
        })
        // serve({
        //     open: true,
        //     contentBase: 'dist',
        //     historyApiFallback: true,
        //     host: 'localhost',
        //     port: 9000
        // }),
        // livereload(),
        // html2({
        //     template: 'public/index.html'
        // })
    ]
}