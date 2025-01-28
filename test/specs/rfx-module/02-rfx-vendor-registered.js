const { fetchEmails } = require('../../helpers/emailHelpers');
const helpers = require('../../helpers/generateData');
const generalComp = require('../../screenobjects/components/general-comp');
const rfxScreen = require('../../screenobjects/rfx.screen');

const formCode = helpers.randomNumber();
const randomTitle = helpers.randomFormName();
const randomText = helpers.randomMessage();
const randomProduct = helpers.randomProduct();

describe('RFX Module', () => {
    before(async () => {
        //Visit Adam Staging and maximize the window
        browser.url('https://staging-adam.supplycart.my/login');
        browser.maximizeWindow();

        //Login to the site
        await generalComp.loginToSite("hadi+testing@supplycart.my", "HadiSc@1234");
    });

    it('My RFX creation', async () => {
        //Hover on the RFX menu and click My RFXs
        await browser.pause(3000);
        await rfxScreen.rfxMenu.moveTo();
        await rfxScreen.myRfxMenu.click();

        //Select a form type
        await rfxScreen.createRfxReq.click();
        await rfxScreen.firstFormType.click();
        await rfxScreen.nextFormBtn.click();
    })

    it('RFX - Fill Up Event Details', async () => {
        //Insert submission remarks, internal remarks
        await rfxScreen.submissionRemarksField.setValue(randomText);
        await rfxScreen.internalRemarksField.setValue(randomText);
        //to add selection of internal source

        //Attach documents
        await rfxScreen.attachFileSubmissionInfo();

        //Insert event title, description, select event type
        await rfxScreen.eventTitleField.setValue(randomTitle);
        await rfxScreen.eventDescField.setValue(randomText);
        //to add selection of event type

        //Select event stages and go next
        await rfxScreen.commercialNomStage.click();
        await rfxScreen.nextEventBtn.click();
    })

    it('RFX - ITR Information', async () => {
        //Select ITR End Date
        await browser.pause(3000);
        await rfxScreen.itrEndDate.click();
        await browser.pause(2000);
        await rfxScreen.dateJan.click();

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