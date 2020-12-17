const rollup = require('rollup')

async function build(option) {
    const bundle = await rollup.rollup(option.input)
    await bundle.write(option.output)
}
(async () => {
    try {
        build({
            input: "./src/index.js",
            output: {
                file: "./dist/index.esm.js",
                format: "esm"
            }
        })
    } catch (e) {
        console.error(e) // eslint-disable-line no-console
    }
})()