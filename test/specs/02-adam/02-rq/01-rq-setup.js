const generalComp = require("../../screenobjects/components/general-comp");
const rqScreen = require("../../screenobjects/rq.screen");

describe('RQ Module', () => {
    before(async () => {
        //Visit Adam Staging and maximize the window
        browser.url('https://staging-adam.supplycart.my/login');
        browser.maximizeWindow();

        //Login to the site
        await generalComp.loginToSite("hadi+testing@supplycart.my", "HadiSc@1234");
    })

    it('RQ Setup', async () => {
        //Hover on Request module and click Settings
        await browser.pause(2000);
        await browser.$(rqScreen.buttons.requestModule).moveTo();
        await browser.$(rqScreen.menu.requestSettings).click();

    })
})