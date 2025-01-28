describe('test run', () => {
    it('test gmail login', async() => {
        browser.url("https://mailtrap.io/");
        browser.maximizeWindow();
        await $("//body/div/header/nav/div/div/div/div/a[1]").click();
        await browser.pause(3000);
        await $("//body/main/div/div/div/div/a[1]").click();
        await browser.pause(3000);

        await $('//*[@id="identifierId"]').setValue("hadi@supplycart.my");
        await $('//*[@id="identifierNext"]/div/button/span').click();
        await browser.pause(2000);
        await $('//*[@id="password"]/div[1]/div/div[1]/input').setValue("Nokia526355+");
        await browser.pause(2000);
        await $('//*[@id="passwordNext"]/div/button').click();
        await browser.pause(4000);
        await $("//a[@title='ADAM - Staging']").click();
        await browser.pause(3000);
        await $("//input[@placeholder='Search...']").setValue("ADAM: NR #TBSB/RFx/25/153/NR/1 worth MYR 5,500.00 by Timothy Yoong requires Approval");
        await browser.pause(3000);
        await $("//div[@data-test-id='messages_list']//ul//li//a").click();

        //validating the email (email is in iframe)
        
        //access the iframe
        const iframeElement = await $('.message_iframe_block.d1qgvcyr.d1qgvcyr--desktop');
        await browser.switchFrame(iframeElement);

        await iframe.waitForExist({timeout:5000})
        await $("//div[2]//div[1]//a[1]//button[1]").click();

        await browser.switchToParentFrame();
    })
})