import { By, WebElement } from "selenium-webdriver";
import { killTeamPage } from "./pageObject";
import { Driver } from "selenium-webdriver/chrome";
const killTeamDashboard = new killTeamPage();

const fs = require("fs");

//Console.log for each result to confirm assertions are made correctly

describe("Kill Team Dash", () => {
    beforeEach(async ()=> {
        await killTeamDashboard.navigate();
    });

    test("Search Cards by Color FB11SCC-4", async ()=> {
       
        });

    

});