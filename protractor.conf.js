exports.config = {
    // set to "custom" instead of cucumber.
    framework: 'custom',
    specs: ["./features/**/*.feature"],
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        format: "summary",
        require: ["features/**/*.ts"],
        compiler: "ts:ts-node/register",
        // Ignore features or scenarios pending to do
        tags: '~@todo'
    }
};