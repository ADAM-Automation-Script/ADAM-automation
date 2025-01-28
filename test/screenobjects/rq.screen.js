class requestScreen{

    get requestModule(){
        return "//div[@id='request']";
    }

    get requestSettings(){
        return ".whitespace-nowrap"
    }
}
  
module.exports = new requestScreen();