
const SpecReporter = require("jasmine-spec-reporter").SpecReporter;

module.exports.config = {
    baseUrl: "http://mantis-prova.base2.com.br",
    specs: ["specs/*.spec.js"],

    capabilities: {
        browserName: "chrome",
    },
    //directConnect: true,

    onPrepare: () => {
        browser.waitForAngularEnabled(false);
        jasmine.getEnv().addReporter(
            new SpecReporter({
                suite: {
                    displayNumber: true
                },
                spec: {
                    displayFailed: true,
                    displayPending: true,
                    displayDuration: true,
                    displayStackTrace: true
                },
                summary: {
                    displayFailed: true
                }
            })
        );
    }
};