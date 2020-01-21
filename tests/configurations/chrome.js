module.exports.config = require("../createProtractorConfig")({
    capabilities: {
        browserName: "chrome",
        chromeOptions: {
          //'w3c': false,
          args: ["--headless"]
        }
    }
});
