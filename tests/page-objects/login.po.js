const Helper = require('protractor-helper')

class Login {
    constructor() {
        this.inputEmail = element(by.name('username'))
        this.inputPassword = element(by.name('password'))
        this.btnLogin = element(by.css('input.button'))
    }

    doLogin(email, password) {
        Helper.fillFieldWithText(this.inputEmail, email)
        Helper.fillFieldWithText(this.inputPassword, password)
        Helper.click(this.btnLogin)
    }
}

module.exports = Login;