import { $ , $$ } from "protractor";

export class MainPageObject {

    public Title = $('.App-title');
    public ValidateButton = $('#button');
    public ValidateField = $('#input');
    public Result = $('#result');

    
    async validateButtonClick(){
        await this.ValidateButton.click();
    }
    async enterValue(value: string) {
        await this.ValidateField.clear();
        await this.ValidateField.sendKeys(value);
    }
}
