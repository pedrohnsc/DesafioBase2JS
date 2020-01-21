const SpecReporter = require("jasmine-spec-reporter").SpecReporter;

module.exports = providedConfig => {
    const defaultConfig = {
        specs: ["../specs/*.spec.js"],
        baseUrl: "http://mantis-prova.base2.com.br",
        seleniumAddress: "http://localhost:4444/wd/hub",
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
    }
    return Object.assign({}, defaultConfig, providedConfig);
};
