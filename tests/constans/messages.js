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

    getWrongEmailOrPasswordMessage() {
        Helper.waitForElementVisibility(this.messageWrongEmailOrPassword)
        return this.messageWrongEmailOrPassword.getText()
    }

    getSuccessMessage(){
        const successMessage = element(by.css('body > div:nth-child(5)'))
        Helper.waitForElementVisibility(successMessage)
        return successMessage.getText()
    }

    getApplicationErrorMessage(){
        const aplicationErrorMessage = element(by.css('p.center'))
        Helper.waitForElementVisibility(aplicationErrorMessage)
        return aplicationErrorMessage.getText()
    }
}

module.exports = Messages;