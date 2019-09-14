const Helper = require('protractor-helper')

class Messages {
    constructor() {
        this.messageLogedIn = element(by.css('.login-info-left'))
        this.messageWrongEmailOrPassword = element(by.css('font'))
    }

    getLogedInMessage() {
        Helper.waitForElementVisibility(this.messageLogedIn)
        return this.messageLogedIn.getText()
    }

    getWrongEmailOrPasswordMessage(){
        Helper.waitForElementVisibility(this.messageWrongEmailOrPassword)
        return this.messageWrongEmailOrPassword.getText()
    }
}

module.exports = Messages;