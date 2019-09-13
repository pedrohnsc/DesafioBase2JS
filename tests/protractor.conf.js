
module.exports.config = {
    baseUrl: "http://mantis-prova.base2.com.br",
    specs: ["specs/*.spec.js"],

    capabilities: {
        browserName: "chrome",
    },
    directConnect = true,

    onPrepare: () => {
        browser.waitForAngularEnabled(false);
    }
};