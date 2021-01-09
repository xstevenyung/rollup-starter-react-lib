import packageMetadata from "./package.json";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.js",
  output: [
    {
      file: packageMetadata.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageMetadata.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [babel({ babelHelpers: "bundled" }), commonjs(), terser()],
  external: ["react"],
};
