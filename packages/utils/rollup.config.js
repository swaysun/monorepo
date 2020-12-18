// import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
import typescript from "rollup-plugin-typescript2";

import pkg from "./package.json";

export default [
  {
    input: "src/index.ts",
    output: {
      name: "GRGUtils",
      file: pkg.browser,
      format: "umd",
    },
    plugins: [
      typescript({
        tsconfigDefaults: {
          compilerOptions: { declaration: true },
        },
      }),
    ],
  },
  {
    input: "src/index.ts",
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "esm" },
    ],
    plugins: [typescript()],
  },
];
