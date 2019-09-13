const Helper = require('protractor-helper')

class Messages {
    constructor() {
        this.messageLogedIn = element(by.css('login-info-left'))
    }

    getLogedInMessage() {
        Helper.waitForElementVisibility(this.messageLogedIn)
        return this.messageLogedIn.getText()
    }
}

module.exports = Messages;