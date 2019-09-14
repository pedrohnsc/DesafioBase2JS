const Helper = require('protractor-helper')
const faker = require('faker')

class ReportIssue {
    constructor() {
        this.btnReportIssue = element(by.linkText('Report Issue'))
        this.openCategory = element(by.name('category_id'))
        this.selectCategory = element(by.css('body > div:nth-child(6) > form > table > tbody > tr:nth-child(2) > td:nth-child(2) > select > option:nth-child(2)'))
        this.inputSumary = element(by.name('summary'))
        this.inputDescription = element(by.name('description'))
        this.btnSubmitForm = element(by.css('input.button'))
        this.summary = faker.lorem.paragraph()
        this.description = faker.lorem.text()
    }
    

    goToReportIssue() {
        Helper.waitForElementVisibility(this.btnReportIssue)
        Helper.click(this.btnReportIssue)
    }

    fillReportIssueForm() {
        this.chooseCategory()
        this.fillSumary()
        this.fillDescription()
        this.clickButtonSubmitForm()
    }

    chooseCategory() {
        Helper.waitForElementVisibility(this.openCategory)
        Helper.click(this.openCategory)
        Helper.click(this.selectCategory)
    }

    fillSumary() {
        Helper.waitForElementVisibility(this.inputSumary)
        Helper.fillFieldWithText(this.inputSumary, this.summary)
    }

    fillDescription() {
        Helper.waitForElementVisibility(this.inputDescription)
        Helper.fillFieldWithText(this.inputDescription, this.description)
    }

    clickButtonSubmitForm(){
        Helper.waitForElementVisibility(this.btnSubmitForm)
        Helper.click(this.btnSubmitForm)
    }

}

module.exports = ReportIssue;