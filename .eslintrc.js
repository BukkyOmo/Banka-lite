module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        mocha: true
    },
    extends: "eslint:recommended",
    parser: "babel-eslint",
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        allowImportExportEverywhere: true
    },
    rules: {}
};
