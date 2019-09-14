const Login = require('../page-objects/login.po')
const Report = require('../page-objects/reportIssue.po')

describe('Tests related to Report Issue', () => {
    const loginPage = new Login
    const reportPage = new Report

    beforeEach(()=>{
        browser.get(browser.baseUrl)
        loginPage.doLogin('pedro.nascimento','123456')
    })
    fit('Report an Issue', () => {
        reportPage.goToReportIssue()
        reportPage.chooseCategory()
        reportPage.fillSumary()
    })

})