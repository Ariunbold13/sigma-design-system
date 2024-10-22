import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
            sourcemap: true
        },
        {
            file: 'dist/index.esm.js',
            format: 'es',
            sourcemap: true
        }
    ],
    plugins: [
        typescript({
            useTsconfigDeclarationDir: true
        }),
        resolve(),
        commonjs(),
        postcss({
            extract: true,
            modules: true
        }),
        terser()
    ],
    external: ['react', 'react-dom']
}