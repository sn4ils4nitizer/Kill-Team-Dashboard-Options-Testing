import {By, until} from 'selenium-webdriver';
import { BasePage } from './basePage';

export class killTeamPage extends BasePage {



    //constructor
    constructor() {
        super({url: "https://ktdash.app/login.htm"});
    };

    //methods
    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return (await this.driver.findElement(elementBy)).click();
    }
};