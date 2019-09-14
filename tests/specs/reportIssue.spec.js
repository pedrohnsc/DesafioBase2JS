const Login = require('../page-objects/login.po')
const Messages = require('../constans/messages')
const Report = require('../page-objects/reportIssue.po')

describe('Tests related to Report Issue', () => {
    const loginPage = new Login
    const messagesPage = new Messages
    const reportPage = new Report

    beforeEach(()=>{
        browser.get(browser.baseUrl)
        loginPage.doLogin('pedro.nascimento','123456')
    })
    fit('Report an Issue', () => {
        reportPage.goToReportIssue()
        reportPage.fillReportIssueForm()
        expect(messagesPage.getSuccessMessage()).toContain('Operation successful.')
    })

})