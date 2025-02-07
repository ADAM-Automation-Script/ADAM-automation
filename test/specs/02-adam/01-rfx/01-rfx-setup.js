const helpers = require('../../../helpers/generateData');
const generalComp = require('../../../screenobjects/components/general-comp');
const rfxScreen = require('../../../screenobjects/rfx.screen');

const formCode = helpers.randomNumber();
const randomTitle = helpers.randomFormName();

describe('RFX Module', () => {
    before(async() => {
        //Visit Adam Staging and maximize the window
        browser.url('https://staging-adam.supplycart.my/login');
        browser.maximizeWindow();

        //Login to the site
        await generalComp.loginToSite("hadi+testing@supplycart.my", "HadiSc@1234");
    });

    it('RFX Settings', async() => {
        //Hover on the RFX Menu and click on Settings
        await browser.pause(3000);
        await rfxScreen.rfxMenu.moveTo();
        await rfxScreen.rfxSettMenu.click();

        //Enable RFX toggle
        await rfxScreen.rfxToggle.click();
        await expect(rfxScreen.successMsg).toBeDisplayed();
        await browser.pause(2000);

        //Enable Filter by Delivery Address
        await rfxScreen.filterDeliveryToggle.click();
        await expect(rfxScreen.successMsg).toBeDisplayed();
        await browser.pause(2000);

        //Enable Internal Source
        await rfxScreen.internalSourceToggle.click();
        await expect(rfxScreen.successMsg).toBeDisplayed();
        await browser.pause(2000);
    })

    it('RFX Form Creation', async() => {
        //Click More Settings and create new form
        await rfxScreen.moreSettings.click();
        await rfxScreen.createRfxForm.click();

        //Insert Form Code, Form Name, and Create
        await rfxScreen.formCodeField.setValue(formCode);
        await rfxScreen.formNameField.setValue(randomTitle);
        await rfxScreen.createRfxBtn.click();
    })

    it('Assign the form to a user', async() => {
        //Select any latest form created
        await rfxScreen.createdRfxForms();

        //Click on Users tab and assign to a user
        await rfxScreen.usersTab.click();
        await rfxScreen.searchUserField.setValue("hadi");
        await rfxScreen.firstUserTick.click();

        //Activate the form & Save
        await rfxScreen.activateFormToggle.click();
        await expect(rfxScreen.activeFormStatus).toBeDisplayed();
        await rfxScreen.saveFormConfigBtn.click();
    })
    
    // after(async() => {
    //     //Hover on the RFX Menu and click on Settings
    //     await browser.pause(3000);
    //     await rfxScreen.rfxMenu.moveTo();
    //     await rfxScreen.rfxSettMenu.click();

    //     //Delete the created form
    //     await rfxScreen.moreSettings.click();
    //     await rfxScreen.createdRfxForms();
    //     await rfxScreen.deleteRfxBtn.click();
    //     await rfxScreen.confirmDeleteRfxBtn.click();

    //     //Hover on the RFX Menu and click on Settings
    //     await browser.pause(3000);
    //     await rfxScreen.rfxMenu.moveTo();
    //     await rfxScreen.rfxSettMenu.click();

    //     //Disable RFX toggle
    //     await rfxScreen.rfxToggle.click();
    //     await expect(rfxScreen.successMsg).toBeDisplayed();
    //     await browser.pause(2000);

    //     //Disable Filter by Delivery Address
    //     await rfxScreen.filterDeliveryToggle.click();
    //     await expect(rfxScreen.successMsg).toBeDisplayed();
    //     await browser.pause(2000);

    //     //Disable Internal Source
    //     await rfxScreen.internalSourceToggle.click();
    //     await expect(rfxScreen.successMsg).toBeDisplayed();
    //     await browser.pause(2000);  
    // })
})