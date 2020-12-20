import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import ts from "rollup-plugin-typescript2";
import replace from "@rollup/plugin-replace";
const path = require("path");
import pkg from "./package.json";

const banner = `/*!
  * ${pkg.name} v${pkg.version}
  * (c) ${new Date().getFullYear()}
  */`;

let hasTSChecked = false;

const outputConfigs = {
  cjs: {
    file: pkg.main,
    format: `cjs`,
  },
  umd: {
    file: pkg.browser,
    format: `umd`,
  },
  esm: {
    file: pkg.module,
    format: `es`,
  },
};

const allFormats = Object.keys(outputConfigs);
// in vue-router there are not that many
const packageFormats = allFormats;
const packageConfigs = packageFormats.map((format) =>
  createConfig(format, outputConfigs[format])
);

packageFormats.forEach((format) => {
  if (format === "umd") {
    packageConfigs.push(createMinifiedConfig(format));
  }
});

export default packageConfigs;

function createConfig(format, output, plugins = []) {
  if (!output) {
    console.log(require("chalk").yellow(`invalid format: "${format}"`));
    process.exit(1);
  }

  output.sourcemap = !!process.env.SOURCE_MAP;
  output.banner = banner;
  output.externalLiveBindings = false;
  // output.globals = { }

  if (format === "umd") output.name = "GrgUtils";

  const shouldEmitDeclarations = !hasTSChecked;

  const tsPlugin = ts({
    check: !hasTSChecked,
    tsconfig: path.resolve(__dirname, "tsconfig.json"),
    cacheRoot: path.resolve(__dirname, "node_modules/.rts2_cache"),
    tsconfigOverride: {
      compilerOptions: {
        sourceMap: output.sourcemap,
        declaration: shouldEmitDeclarations,
        declarationMap: shouldEmitDeclarations,
      },
      // exclude: ['__tests__', 'test-dts'],
    },
  });

  hasTSChecked = true;

  // const external = [ ]

  const nodePlugins = [resolve(), commonjs()];

  return {
    input: `src/index.ts`,
    // external,
    plugins: [tsPlugin, createReplacePlugin(), ...nodePlugins, ...plugins],
    output,
  };
}

function createReplacePlugin() {
  const replacements = {
    __VERSION__: `"${pkg.version}"`,
  };
  Object.keys(replacements).forEach((key) => {
    if (key in process.env) {
      replacements[key] = process.env[key];
    }
  });
  return replace(replacements);
}

function createMinifiedConfig(format) {
  const { terser } = require("rollup-plugin-terser");
  return createConfig(
    format,
    {
      file: `dist/utils.${format}.min.js`,
      format,
    },
    [
      terser({
        compress: {
          ecma: 2015,
          pure_getters: true,
        },
      }),
    ]
  );
}
