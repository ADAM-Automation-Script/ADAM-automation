const helpers = require('../../helpers/generateData');
const generalComp = require('../../screenobjects/components/general-comp');
const rfxScreen = require('../../screenobjects/rfx.screen');

const vendorName = helpers.randomVendorName();
const randomTitle = helpers.randomFormName();
const randomText = helpers.randomMessage();
const randomProduct = helpers.randomProduct();
const randomEmail = helpers.randomEmail();
const randomName = helpers.randomName();
const randomPhoneNumber = helpers.randomPhoneNumber();

describe('RFX Module', () => {
    before(async () => {
        //Visit Adam Staging and maximize the window
        browser.url('https://staging-adam.supplycart.my/login');
        browser.maximizeWindow();

        //Login to the site
        await generalComp.loginToSite("hadi+testing@supplycart.my", "HadiSc@1234");
    });

    //Show All Vendors Fields
    it('Enable Vendor Information & Display All Vendors Fields', async () => {
        //Hover on the RFX Menu and click on Settings
        await browser.pause(3000);
        await rfxScreen.rfxMenu.moveTo();
        await rfxScreen.rfxSettMenu.click();

        //Click More Settings and click on existing form
        await rfxScreen.moreSettings.click();
        await rfxScreen.createdRfxForms();

        //Toggle unregistered vendor input
        await rfxScreen.enableUnregistedVendorInput.click();

        //Show Vendor Address, PIC, Contact Number, Incoterm
        await rfxScreen.enableAllVendorFields();
    })

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
        browser.pause(3000);
        await rfxScreen.itrEndDate.click();
        await rfxScreen.dateJan.click();

        //Add Questionnaire
        await rfxScreen.addQuestionBtn.click();
        await rfxScreen.itrQuestionTitleField.setValue(randomTitle);
        await rfxScreen.itrQuestionDescBox.click();
        await rfxScreen.itrQuestionDescField.setValue(randomText);

        //Add Questionnaire Section, insert section title, section description
        await rfxScreen.addSectionBtn.click();
        await rfxScreen.sectionTitleField.setValue(randomTitle);
        await rfxScreen.sectionDescBox.click();
        await rfxScreen.sectionDescField.setValue(randomText);

        //Add Label, Select Rules, Info Tooltip
        await rfxScreen.labelField.setValue(randomTitle);
        await rfxScreen.infoTooltipField.setValue(randomTitle);

        //Add FFT and click Next
        await rfxScreen.addFftBtn.click();
        await rfxScreen.itemCodeNameField.setValue(randomProduct);
        await rfxScreen.uomBox.click();
        await browser.pause(1000);
        await rfxScreen.cartonUomSelect.click();
        await rfxScreen.qtyField.setValue(3);
        await rfxScreen.nextItrBtn.click();
    })

    it('RFX - Vendors Information', async () => {
        //Select a vendor
        await browser.pause(3000);
        await rfxScreen.addUnregisteredVendor.click();
        await rfxScreen.vendorEntityNameField.setValue(vendorName);
        await rfxScreen.vendorPicField.setValue(randomName);
        await rfxScreen.vendorContactNumber.setValue(randomPhoneNumber);
        await rfxScreen.vendorEmailField.setValue(randomEmail);
        await rfxScreen.vendorPaymentTerms.click();
        await browser.pause(2000);
        await rfxScreen.firstPaymentTerm.click();
        await browser.pause(3000);
        await rfxScreen.nextVendorBtn.click();
    })

    it('RFX - Summary Submit Information', async () => {
        //Submit the RFX
        await browser.pause(2000);
        await rfxScreen.submitRfxBtn.scrollIntoView();
        await rfxScreen.submitRfxBtn.click();

        //Confirm Submit RFX
        await rfxScreen.confirmSubmitRfxBtn.click();
    })

    //Hide All Vendor Fields
    it('Enable Vendor Information & Hide All Vendors Fields', async () => {
        //Hover on the RFX Menu and click on Settings
        await browser.pause(3000);
        await rfxScreen.rfxMenu.moveTo();
        await rfxScreen.rfxSettMenu.click();

        //Click More Settings and click on existing form
        await rfxScreen.moreSettings.click();
        await rfxScreen.createdRfxForms();

        //Hide Vendor Address, PIC, Contact Number, Incoterm
        await rfxScreen.vendorAddressToggle.click();
        await rfxScreen.vendorPicToggle.click();
        await rfxScreen.vendorContactNoToggle.click();
        await rfxScreen.incotermsToggle.click();
        await rfxScreen.saveFormConfigBtn.click();
    })

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
        await browser.pause(2000);
        await rfxScreen.itrEndDate.click();
        await browser.pause(1000);
        await rfxScreen.dateJan.click();

        //Add Questionnaire
        await rfxScreen.addQuestionBtn.click();
        await rfxScreen.itrQuestionTitleField.setValue(randomTitle);
        await rfxScreen.itrQuestionDescBox.click();
        await rfxScreen.itrQuestionDescField.setValue(randomText);

        //Add Questionnaire Section, insert section title, section description
        await rfxScreen.addSectionBtn.click();
        await rfxScreen.sectionTitleField.setValue(randomTitle);
        await rfxScreen.sectionDescBox.click();
        await rfxScreen.sectionDescField.setValue(randomText);

        //Add Label, Select Rules, Info Tooltip
        await rfxScreen.labelField.setValue(randomTitle);
        await rfxScreen.infoTooltipField.setValue(randomTitle);

        //Add FFT and click Next
        await rfxScreen.addFftBtn.click();
        await rfxScreen.itemCodeNameField.setValue(randomProduct);
        await rfxScreen.uomBox.click();
        await browser.pause(1000);
        await rfxScreen.cartonUomSelect.click();
        await rfxScreen.qtyField.setValue(3);
        await rfxScreen.nextItrBtn.click();
    })

    it('RFX - Vendors Information', async () => {
        await browser.pause(3000);
        await rfxScreen.addUnregisteredVendor.click();
        await rfxScreen.vendorEntityNameField.setValue(vendorName);
        await expect(rfxScreen.vendorPicColumn).not.toBeExisting();
        await expect(rfxScreen.vendorContactNumberColumn).not.toBeExisting();
        await rfxScreen.vendorEmailField.setValue(randomEmail);
        await expect(rfxScreen.vendorAddressColumn).not.toBeExisting();
        await rfxScreen.vendorPaymentTerms.click();
        await browser.pause(2000);
        await rfxScreen.firstPaymentTerm.click();
        await browser.pause(3000);
        await expect(rfxScreen.incotermsField).not.toBeExisting();
        await rfxScreen.nextVendorBtn.click();
    })

    it('RFX - Summary Submit Information', async () => {
        //Submit the RFX
        await browser.pause(2000);
        await rfxScreen.submitRfxBtn.scrollIntoView();
        await rfxScreen.submitRfxBtn.click();

        //Confirm Submit RFX
        await rfxScreen.confirmSubmitRfxBtn.click();
    })

    //Disable Unregistered Vendor
    it('Enable Vendor Information & Display All Vendors Fields', async () => {
        //Hover on the RFX Menu and click on Settings
        await browser.pause(3000);
        await rfxScreen.rfxMenu.moveTo();
        await rfxScreen.rfxSettMenu.click();

        //Click More Settings and click on existing form
        await rfxScreen.moreSettings.click();
        await rfxScreen.createdRfxForms();

        //Toggle unregistered vendor input
        await rfxScreen.enableUnregistedVendorInput.click();
        await browser.pause(2000);
        await rfxScreen.saveFormConfigBtn.click();
        await browser.pause(2000);
    })
})