const Helper = require('protractor-helper')

class ReportIssue {
    constructor() {
        this.btnReportIssue = element(by.linkText('Report Issue'))
        this.openCategory = element(by.name('category_id'))
        this.selectCategory = element(by.css('body > div:nth-child(6) > form > table > tbody > tr:nth-child(2) > td:nth-child(2) > select > option:nth-child(2)'))
        this.inputSumary = element(by.name('summary'))
    }

    goToReportIssue() {
        Helper.waitForElementVisibility(this.btnReportIssue)
        Helper.click(this.btnReportIssue)
    }

    fillReportIssueForm() {


    }

    chooseCategory() {
        Helper.waitForElementVisibility(this.openCategory)
        Helper.click(this.openCategory)
        Helper.click(this.selectCategory)
    }

    fillSumary(){
        Helper.waitForElementVisibility(this.inputSumary)
        Helper.fillFieldWithText(this.inputSumary,'balalalsadkhdakdhsjkldhsk')
    }

}

module.exports = ReportIssue;