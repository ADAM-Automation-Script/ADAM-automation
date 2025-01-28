class generalComp{
    get emailField(){
        return $("input[placeholder='Email']");
    }

    get passwordField(){
        return $("input[placeholder='Password']");
    }

    get loginBtn(){
        return $("button[type='submit']");
    }

    async loginToSite(email,password){
        await this.emailField.setValue(email);
        await this.passwordField.setValue(password);
        await this.loginBtn.click();
    }
}

module.exports = new generalComp();