const Helper = require('protractor-helper')
const faker = require('faker')

class ReportIssue {
    constructor() {
        this.btnReportIssue = element(by.linkText('Report Issue'))
        this.selectCategory = element(by.name('category_id'))
        this.selectReproducibility = element(by.name('reproducibility'))
        this.selectSeverity = element(by.name('severity'))
        this.selectPriority = element(by.name('priority'))
        this.selectProfile = element(by.name('profile_id'))
        this.inputPlataform = element(by.id('plataform'))
        this.inputOperationalSistem = element(by.id('os'))
        this.inputOperationalSistemVersion = element(by.id('os_build'))
        this.selectAssignTo = element(by.name('handler_id'))
        this.inputSumary = element(by.name('summary'))
        this.inputDescription = element(by.name('description'))
        this.inputStepsToReproduce = element(by.name('steps_to_reproduce'))
        this.inputAditionalInformation = element(by.name('additional_info'))
        this.checkboxReportStay = element(by.id('report_stay'))
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
        this.awaitAndClick(this.selectCategory)
    }

    chooseReproducibility() {
        this.awaitAndClick(this.selectReproducibility)
    }

    chooseSeverity() {
        this.awaitAndClick(this.chooseSeverity)
    }

    fillSumary() {
        this.awaitAndFillWithText(this.inputSumary, this.summary)
    }

    fillDescription() {
        this.awaitAndFillWithText(this.inputDescription, this.description)
    }

    clickButtonSubmitForm() {
        Helper.waitForElementVisibility(this.btnSubmitForm)
        Helper.click(this.btnSubmitForm)
    }

    clickArrowDownAndPressEnter() {
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    }

    awaitAndFillWithText(element, text) {
        Helper.waitForElementVisibility(element)
        Helper.fillFieldWithText(element, text)
    }

    awaitAndClick(element) {
        Helper.waitForElementVisibility(element)
        Helper.click(element)
        this.clickArrowDownAndPressEnter()
    }

}

module.exports = ReportIssue;