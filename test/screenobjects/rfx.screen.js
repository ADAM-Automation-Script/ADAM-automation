class rfxModuleScreen {
    //-----------------------------------------------------------------fields-------------------------------------------------------------------------------------------------------
    get vendorPicField() {
        return $("//tbody/tr/td[5]/div[1]/input[1]");
    }

    get vendorPicColumn() {
        return $("//th[normalize-space()='Vendor Person In Charge']");
    }

    get vendorContactNumber() {
        return $("//input[@placeholder='011 XXXX XXX']");
    }

    get vendorContactNumberColumn() {
        return $("//th[normalize-space()='Vendor Contact Number']");
    }

    get vendorAddressColumn() {
        return $("//th[normalize-space()='Vendor Address']");
    }

    get incotermsField() {
        return $("(//div[@class='v-select vs--single vs--searchable'])[2]");
    }

    get incotermsColumn() {
        return $("//th[normalize-space()='Incoterms']");
    }

    get formCodeField() {
        return $("(//input[@type='text'])[1]");
    }

    get formNameField() {
        return $("//input[@required='required']");
    }

    get searchUserField() {
        return $("//input[@placeholder='Search Name, Email']");
    }

    get submissionRemarksField() {
        return $("(//textarea)[1]");
    }

    get internalRemarksField() {
        return $("(//textarea)[2]");
    }

    get eventTitleField() {
        return $("(//input[@type='text'])[6]");
    }

    get eventDescField() {
        return $("(//textarea)[3]");
    }

    get itrEndDate() {
        return $(".form-control");
    }

    get itrQuestionTitleField() {
        return $("//body//div//div//div//div//div//div//div//div//div//div//div//div//div//div//div//textarea");
    }

    get itrQuestionDescBox() {
        return $("//body//div//div//div//div//div//div//div//div//div//div//div//div//div//div//div//div");
    }

    get itrQuestionDescField() {
        return $("//div[@contenteditable='true']");
    }

    get sectionTitleField() {
        return $("//body/div/div/div/div/div/div/div/div/div/div/div/div/div/div/div/div/div/input[1]");
    }

    get sectionDescBox() {
        return $("//body[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]");
    }

    get sectionDescField() {
        return $("//div[@contenteditable='true']");
    }

    get labelField() {
        return $("//input[@placeholder='Please type your question']");
    }

    get infoTooltipField() {
        return $("//body//div//div//div//div//div//div//div//div//div//div//div//div//div//div//div//div//div//span//div//div//div//div//div//input[@type='text']")
    }

    get itemCodeNameField() {
        return $("//tbody//tr//td//div//div//div//div//div//input[@type='text']");
    }

    get uomBox() {
        return $("//div[@label='label']//div[@aria-label='Search for option']");
    }

    get qtyField() {
        return $("//input[@placeholder='1']");
    }

    get vendorEntityNameField() {
        return $("//input[@type='text']");
    }

    get vendorEmailField() {
        return $("//input[@type='email']");
    }

    get vendorPaymentTerms() {
        return $("//div[@class='vs__selected-options']");
    }

    get departmentBox() {
        return $("(//div[@class='vs__selected-options'])[4]");
    }

    get firstDpmtOpt() {
        return $("//li[@id='vs35__option-0']");
    }

    get costCentreBox() {
        return $("(//div[@class='vs__selected-options'])[6]");
    }

    get costCentreSearch(){
        return $("(//input[@type='search'])[6]");
    }

    get firstCostCentreOpt() {
        return $("//li[@id='vs37__option-0']");
    }

    get deliveryDateBox() {
        return $("(//input[@class=' form-control input'])[1]");
    }

    get categoryBox() {
        return $("(//div[@class='vs__selected-options'])[8]");
    }

    get categorySearch(){
        return $("(//input[@type='search'])[8]");
    }

    get firstCatOpt() {
        return $("//li[@id='vs39__option-0']");
    }

    get projectCodeBox() {
        return $("(//div[@class='vs__selected-options'])[9]");
    }

    get projectCodeSearch(){
        return $("(//input[@type='search'])[9]");
    }

    get firstProjectCodeOpt() {
        return $("//div[@id='vs40__combobox']//input[@type='search']");
    }

    get glCodeBox() {
        return $("(//div[@class='vs__selected-options'])[5]");
    }

    get glCodeSearch(){
        return $("(//input[@type='search'])[5]");
    }

    get firstGlCodeOpt() {
        return $("#vs9__option-0");
    }

    get eventBriefingBox() {
        return $(".p-2");
    }

    get eventBriefingField() {
        return $(".ProseMirror");
    }

    get departmentSearch(){
        return $("(//input[@type='search'])[4]")
    }

    //-----------------------------------------------------------------buttons-------------------------------------------------------------------------------------------------------
    get rfxMenu() {
        return $("#request-for-x");
    }

    get viewLatestRfx() {
        return $("//tbody/tr[1]/td[15]/span[1]/a[1]/span[1]");
    }

    get enableUnregistedVendorInput() {
        return $("(//span[@class='slider round'])[16]");
    }

    get rfxSettMenu() {
        return $("//a[@href='https://staging-adam.supplycart.my/request-for-xs/settings']//div");
    }

    get myRfxMenu() {
        return $("//span[normalize-space()='My RFXs']");
    }

    get firstPaymentTerm() {
        return $("//li[normalize-space()='30 Days']");
    }

    get rfxToggle() {
        return $("(//span[@class='slider round'])[1]");
    }

    get filterDeliveryToggle() {
        return $("(//span[@class='slider round'])[2]")
    }

    get internalSourceToggle() {
        return $("(//span[@class='slider round'])[3]");
    }

    get successMsg() {
        return $("//div[@role='alert']");
    }

    get moreSettings() {
        return $("//a[normalize-space()='More Settings']");
    }

    get createRfxForm() {
        return $("//button[normalize-space()='Create New']");
    }

    get createRfxBtn() {
        return $("(//button[@class='btn btn-primary relative transition-transform duration-150'])[1]");
    }

    get usersTab() {
        return $("//a[normalize-space()='Users']");
    }

    get firstUserTick() {
        return $("//input[@value='23615']");
    }

    get activateFormToggle() {
        return $("(//span[@class='slider round'])[43]");
    }

    get saveFormConfigBtn() {
        return $("//span[contains(text(),'Save')]");
    }

    get createRfxReq() {
        return $("//span[contains(text(),'Create')]");
    }

    get firstFormType() {
        return $("//body//div//div//div//div//div//div//div//div//div//div//div//label");
    }

    get nextFormBtn() {
        return $("//button[normalize-space()='Next']");
    }

    get nextEventBtn() {
        return $(".has-tooltip > .btn > .relative");
    }

    get commercialNomStage() {
        return $("//span[normalize-space()='Commercial Nomination']");
    }

    get dateJan() {
        return $("//span[@aria-label='January 22, 2025']");
    }

    get addQuestionBtn() {
        return $("(//button[@type='button'])[1]");
    }

    get addSectionBtn() {
        return $("//span[contains(text(),'Add Section')]");
    }

    get addFftBtn() {
        return $("//tbody//tr//td//div//button");
    }

    get cartonUomSelect() {
        return $("//li[normalize-space()='Carton']");
    }

    get nextItrBtn() {
        return $("//span[contains(text(),'Next')]");
    }

    get selectVendorBtn() {
        return $("//tbody//tr//td//div//span//button[@type='button']");
    }

    get nextVendorBtn() {
        return $("//body/div/div/div/div/div/div/div/div/span[@data-original-title='null']/button[1]");
    }

    get submitRfxBtn() {
        return $("//span[contains(text(),'Submit')]");
    }

    get selectFirstVendorBtn() {
        return $("//body[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/table[1]/tbody[1]/tr[1]/td[7]/span[1]/button[1]/span[1]")
    }

    get confirmSubmitRfxBtn() {
        return $("//button[normalize-space()='Confirm']");
    }

    get deleteRfxBtn() {
        return $("//span[contains(text(),'Delete')]");
    }

    get confirmDeleteRfxBtn() {
        return $("//button[contains(text(),'Delete')]");
    }

    get vendorAddressToggle() {
        return $("//body[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[3]/div[1]/label[1]/div[1]/span[1]/label[1]/span[1]");
    }

    get vendorPicToggle() {
        return $("//body[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[2]/table[1]/tbody[1]/tr[5]/td[3]/div[1]/label[1]/div[1]/span[1]/label[1]/span[1]");
    }

    get vendorContactNoToggle() {
        return $("//body[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[2]/table[1]/tbody[1]/tr[6]/td[3]/div[1]/label[1]/div[1]/span[1]/label[1]/span[1]");
    }

    get incotermsToggle() {
        return $("//body[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[2]/table[1]/tbody[1]/tr[8]/td[3]/div[1]/label[1]/div[1]/span[1]/label[1]/span[1]");
    }

    get addUnregisteredVendor() {
        return $("//span[contains(text(),'Add Unregistered Vendor')]");
    }

    get editDraftBtn() {
        return $("//tbody/tr[1]/td[15]/span[1]/a[1]/span[1]//*[name()='svg']");
    }

    get editSecDraftBtn() {
        return $("//tbody/tr[2]/td[15]/span[1]/a[1]/span[1]//*[name()='svg']");
    }

    get deliveryDateToggle() {
        return $("//body[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[3]/table[1]/tbody[1]/tr[1]/td[3]/div[1]/label[1]/div[1]/span[1]/label[1]/span[1]");
    }

    get departmentToggle() {
        return $("//body[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[3]/table[1]/tbody[1]/tr[2]/td[3]/div[1]/label[1]/div[1]/span[1]/label[1]/span[1]");
    }

    get glCodeToggle() {
        return $("//body[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[3]/table[1]/tbody[1]/tr[3]/td[3]/div[1]/label[1]/div[1]/span[1]/label[1]/span[1]");
    }

    get costCentreToggle() {
        return $("//body[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[3]/table[1]/tbody[1]/tr[4]/td[3]/div[1]/label[1]/div[1]/span[1]/label[1]/span[1]");
    }

    get projectCodeToggle() {
        return $("//body[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[3]/table[1]/tbody[1]/tr[5]/td[3]/div[1]/label[1]/div[1]/span[1]/label[1]/span[1]");
    }

    get categoryToggle() {
        return $("//body[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[3]/table[1]/tbody[1]/tr[9]/td[3]/div[1]/label[1]/div[1]/span[1]/label[1]/span[1]");
    }

    get itrStartDateToggle() {
        return $("//body[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[3]/table[1]/tbody[1]/tr[12]/td[3]/div[1]/label[1]/div[1]/span[1]/label[1]/span[1]");
    }

    get itrVendorAcceptanceDeadlineToggle() {
        return $("//body[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[3]/table[1]/tbody[1]/tr[14]/td[3]/div[1]/label[1]/div[1]/span[1]/label[1]/span[1]");
    }

    get enableEventBriefingToggle() {
        return $("//body[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[4]/div[1]/div[1]/div[2]/span[2]/label[1]/span[1]");
    }

    get enablePreQualificationToggle() {
        return $("//body[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[4]/div[2]/div[1]/div[2]/span[2]/label[1]/span[1]");
    }

    get enableTechnicalQualificationToggle() {
        return $("//body[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[4]/div[3]/div[1]/div[2]/span[2]/label[1]/span[1]");
    }

    get itrStartDateCal() {
        return $("(//input[@type='text'])[1]");
    }

    get itrEndDateCal() {
        return $("(//input[@type='text'])[2]");
    }

    get itrEndDateValue() {
        return $("(//span[@aria-label='January 22, 2025'][normalize-space()='22'])[2]");
    }

    get itrVendorAcceptanceCal() {
        return $("(//input[@type='text'])[3]");
    }

    get itrVendorDateValue() {
        return $("(//span[@aria-label='January 22, 2025'][normalize-space()='22'])[3]");
    }
    //-----------------------------------------------------------------forms-------------------------------------------------------------------------------------------------------
    get firstRfxForm() {
        return $("//div[@id='content']//div[2]//div[1]//div[1]//div[5]//div[1]//button[1]");
    }

    get secondRfxForm() {
        return $("//button[normalize-space()='View']");
    }

    //-----------------------------------------------------------------misc-------------------------------------------------------------------------------------------------------
    get activeFormStatus() {
        return $("//span[normalize-space()='Active']");
    }

    get referenceNumber() {
        return $("//div[@type='ref_no']//div");
    }

    get viewReferNumber() {
        return $("//body/div/div/div/div/div[1]/div[1]/span[1]");
    }

    //attach document submitter
    async attachFileSubmissionInfo() {
        const filePath = "test/utils/cat.jpg";
        const remoteFilePath = await browser.uploadFile(filePath);
        await browser.execute("document.querySelector('#content > div > div.card > div > div > div.grid.grid-cols-1.gap-4 > div.grid.grid-cols-4.gap-4 > div:nth-child(4) > input').className = ''");
        const fileInput = $("input[type='file']");
        await fileInput.setValue(remoteFilePath);
        await browser.execute("document.querySelector('#content > div > div.card > div > div > div.grid.grid-cols-1.gap-4 > div.grid.grid-cols-4.gap-4 > div:nth-child(4) > input').className = 'hidden'");
    }

    async attachFileSubmissionInfoAllFields() {
        const filePath = "test/utils/cat.jpg";
        const remoteFilePath = await browser.uploadFile(filePath);
        await browser.execute("document.querySelector('#content > div > div.card > div > div > div.grid.grid-cols-1.gap-4 > div.grid.grid-cols-4.gap-4 > div:nth-child(7) > input').className= ''");
        const fileInput = $("input[type='file']");
        await fileInput.setValue(remoteFilePath);
        await browser.execute("document.querySelector('#content > div > div.card > div > div > div.grid.grid-cols-1.gap-4 > div.grid.grid-cols-4.gap-4 > div:nth-child(7) > input').className= 'hidden'");
    }

    async createdRfxForms() {
        try {
            await this.firstRfxForm.click();
        } catch {
            await this.secondRfxForm.click();
        }
    }

    async selectRegisteredVendorDetails() {
        await browser.pause(3000);
        await this.selectVendorBtn.click();
        await this.selectFirstVendorBtn.waitForDisplayed({ timeout: 10000 });
        await this.selectFirstVendorBtn.click();
        await browser.pause(3000);
        await this.nextVendorBtn.click();
    }

    async addQuestionnaire(randomTitle, randomText) {
        //Add Questionnaire
        await this.addQuestionBtn.click();
        await this.itrQuestionTitleField.setValue(randomTitle);
        await this.itrQuestionDescBox.click();
        await this.itrQuestionDescField.setValue(randomText);

        //Add Questionnaire Section, insert section title, section description
        await this.addSectionBtn.click();
        await this.sectionTitleField.setValue(randomTitle);
        await this.sectionDescBox.click();
        await this.sectionDescField.setValue(randomText);

        //Add Label, Select Rules, Info Tooltip
        await this.labelField.setValue(randomTitle);
        await this.infoTooltipField.setValue(randomTitle);
    }

    async addFft(randomProduct){
        await this.addFftBtn.click();
        await this.itemCodeNameField.setValue(randomProduct);
        await this.uomBox.click();
        await browser.pause(1000);
        await this.cartonUomSelect.click();
        await this.qtyField.setValue(3);
        await this.nextItrBtn.click();
    }

    async toggleAllSubmissionInfo(){
        await this.deliveryDateToggle.click();
        await this.departmentToggle.click();
        await this.glCodeToggle.click();
        await this.costCentreToggle.click();
        await this.projectCodeToggle.click();
        await this.categoryToggle.click();
        await this.itrStartDateToggle.click();
        await this.itrVendorAcceptanceDeadlineToggle.click();
        await this.enableEventBriefingToggle.click();
        //await this.enablePreQualificationToggle.click();
        await this.enableTechnicalQualificationToggle.click();
    }

    async enableAllVendorFields(){
        await this.vendorPicToggle.click();
        await this.vendorContactNoToggle.click();
        await this.incotermsToggle.click();
        await browser.pause(2000);
        await this.saveFormConfigBtn.click();
    }
}

module.exports = new rfxModuleScreen();