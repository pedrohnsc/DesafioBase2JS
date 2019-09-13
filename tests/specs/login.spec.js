const Login = require('../page-objects/login.po')

describe('Success login tests', () => {
    const loginPage = new Login;

    beforeEach(() => {
        browser.get(' http://mantis-prova.base2.com.br ')
    })

    it('Login', () => {
        loginPage.doLogin('pedro.nascimento', '123456')
    })
})