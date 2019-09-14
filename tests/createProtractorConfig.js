module.exports = providedConfig => {
    const defaultConfig = {
        seleniumAddress: "http://localhost:4444/wd/hub",
        specs: ["../specs/*.spec.js"],
        baseUrl: "http://mantis-prova.base2.com.br",

        onPrepare: () => {
            browser.waitForAngularEnabled(false);
        }
    }
    return Object.assign({}, defaultConfig, providedConfig);
};
