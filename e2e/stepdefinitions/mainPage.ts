import { browser } from "protractor";
import { MainPageObject } from "../pages/mainPage";

const { Given, When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const main: MainPageObject = new MainPageObject();

Given('I navigate to main page', async function () {
    await expect(browser.getCurrentUrl()).to.eventually.to.have.string("localhost:3000");
});

When('I enter {string} in to the validation field', async function (value: string){
    await main.enterValue(value);  
});

When('I click Validate button', async function () {
    await main.validateButtonClick(); 
});

Then('I see result {string} under the validation field', async function (value: string){
    expect(await main.Result.getText()).equal(value);   
});
        
          


  
