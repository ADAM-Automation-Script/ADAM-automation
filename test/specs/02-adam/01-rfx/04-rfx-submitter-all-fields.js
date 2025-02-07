const generalComp = require("../../screenobjects/components/general-comp");
const rfxScreen = require("../../screenobjects/rfx.screen");
const helpers = require('../../helpers/generateData');

const randomTitle = helpers.randomFormName();
const randomText = helpers.randomMessage();
const randomProduct = helpers.randomProduct();

describe('All Submission Level Information', () => {
    before(async () => {
        //Visit Adam Staging and maximize the window
        browser.url('https://staging-adam.supplycart.my/login');
        browser.maximizeWindow();

        //Login to the site
        await generalComp.loginToSite("hadi+testing@supplycart.my", "HadiSc@1234");
    });

    //Show All Submission Fields
    it('Enable All Submission Info & Stages', async () => {
        //Hover on the RFX Menu and click on Settings
        await browser.pause(3000);
        await rfxScreen.rfxMenu.moveTo();
        await rfxScreen.rfxSettMenu.click();

        //Click More Settings and click on existing form
        await rfxScreen.moreSettings.click();
        await rfxScreen.createdRfxForms();

        //Toggle on all submission info
        await rfxScreen.toggleAllSubmissionInfo();

        //Save the config
        await browser.pause(2000);
        await rfxScreen.saveFormConfigBtn.click();
    })

    it('My RFX creation', async () => {
        //Hover on the RFX menu and click My RFXs
        await browser.pause(3000);
        await rfxScreen.rfxMenu.moveTo();
        await rfxScreen.myRfxMenu.click();

        //Select a form type
        //await rfxScreen.editDraftBtn.click();
        await rfxScreen.createRfxReq.click();
        await rfxScreen.firstFormType.click();
        await rfxScreen.nextFormBtn.click();
    })

    it('RFX - Fill Up Event Details', async () => {
        //Select Department Box 
        await browser.pause(2000);
        await rfxScreen.departmentBox.click();
        await rfxScreen.departmentSearch.setValue("Management");
        await browser.pause(2000);
        await browser.keys('Enter');

        //Select GL Code
        await rfxScreen.glCodeBox.click();
        await rfxScreen.glCodeSearch.setValue("Overhead");
        await browser.pause(2000);
        await browser.keys('Enter');

        //Select Cost Centre
        await rfxScreen.costCentreBox.click();
        await rfxScreen.costCentreSearch.setValue("Production");
        await browser.pause(2000);
        await browser.keys('Enter');

        //Insert submission remarks, internal remarks
        await browser.pause(2000);
        await rfxScreen.submissionRemarksField.setValue(randomText);
        await rfxScreen.internalRemarksField.setValue(randomText);
        //to add selection of internal source

        //Attach documents
        await rfxScreen.attachFileSubmissionInfoAllFields();

        //Insert event title, description, select event type
        await rfxScreen.eventTitleField.setValue(randomTitle);
        await rfxScreen.eventDescField.setValue(randomText);
        //to add selection of event type

        //Select Delivery Date
        await rfxScreen.deliveryDateBox.click();
        await browser.pause(2000);
        await rfxScreen.dateJan.click();

        //Select Category
        await rfxScreen.categoryBox.click();
        await rfxScreen.categorySearch.setValue("Equipments");
        await browser.pause(2000);
        await browser.keys('Enter');

        //Select Project Code
        await rfxScreen.projectCodeBox.click();
        await rfxScreen.projectCodeSearch.setValue("Project 1");
        await browser.pause(2000);
        await browser.keys('Enter');

        //Insert Event Briefing
        await rfxScreen.eventBriefingBox.click();
        await browser.pause(2000);
        await rfxScreen.eventBriefingField.setValue(randomText)

        //Select event stages and go next
        await rfxScreen.commercialNomStage.click();
        await rfxScreen.nextEventBtn.click();
    })

    it('ITR Details Completion', async () => {
        //ITR Start Date
        await browser.pause(2000);
        await rfxScreen.itrStartDateCal.click();
        await browser.pause(2000);
        await rfxScreen.dateJan.click();

        //ITR End Date
        await browser.pause(2000);
        await rfxScreen.itrEndDateCal.click();
        await browser.pause(2000);
        await rfxScreen.itrEndDateValue.click();

        //ITR Vendor Acceptance Deadline
        await browser.pause(2000);
        await rfxScreen.itrVendorAcceptanceCal.click();
        await browser.pause(2000);
        await rfxScreen.itrVendorDateValue.click();
        await rfxScreen.itrStartDateCal.click();

        //Add Questionnaire
        await rfxScreen.addQuestionnaire(randomTitle, randomText);

        //Add FFT and click Next
        await rfxScreen.addFft(randomProduct);
    })

    it('RFX - Vendors Information', async () => {
        //Select a vendor
        rfxScreen.selectRegisteredVendorDetails();
    })

    it('RFX - Summary Submit Information', async () => {
        //Submit the RFX
        await browser.pause(2000);
        await rfxScreen.submitRfxBtn.scrollIntoView();
        await rfxScreen.submitRfxBtn.click();

        //Confirm Submit RFX
        await rfxScreen.confirmSubmitRfxBtn.click();
    })
})