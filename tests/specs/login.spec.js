const Login = require('../page-objects/login.po')
const Messages = require('../constans/messages')

describe('Success login tests', () => {
    const loginPage = new Login;
    const messagesPage = new Messages

    beforeEach(() => {
        browser.get(' http://mantis-prova.base2.com.br ')
    })

    afterEach(()=>{
        loginPage.doLogout()
    })

    it('Login', () => {
        loginPage.doLogin('pedro.nascimento', '123456')
        expect(messagesPage.getLogedInMessage()).toContain('Logged in as: pedro.nascimento (Pedro Henrique do Nascimento - manager)')
    })
})

describe('Failed Login tests', () => {
    const loginPage = new Login;
    const messagesPage = new Messages

    beforeEach(() => {
        browser.get(' http://mantis-prova.base2.com.br ')
    })


    it('Wrong email', () => {
        loginPage.doLogin('pedro', '123456')
        expect(messagesPage.getWrongEmailOrPasswordMessage()).toContain('Your account may be disabled or blocked or the username/password you entered is incorrect.')
    })

    it('Wrong password', () => {
        loginPage.doLogin('pedro.nascimento', '123@banana')
        expect(messagesPage.getWrongEmailOrPasswordMessage()).toContain('Your account may be disabled or blocked or the username/password you entered is incorrect.')
    })

    it('Dont fill the login form', () => {
        loginPage.doLogin('', '')
        expect(messagesPage.getWrongEmailOrPasswordMessage()).toContain('Your account may be disabled or blocked or the username/password you entered is incorrect.')
    })

})