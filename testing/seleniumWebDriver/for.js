const { Builder, By, Key } = require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');


(async function example() {
    let options = new chrome.Options();
    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    try {
        // Navigate to Url
        await driver.get('http://ec2-3-223-123-204.compute-1.amazonaws.com/');

        // Get all the elements available with className 'option'
        let elements = await driver.findElements(By.className("option"));
        for(let e of elements) {
            console.log(await e.getText(),elements, "Teste");

        }
    }
    finally {
        
    }
})();