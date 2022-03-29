const { Builder, By, Key } = require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');


async function testeLogin(){
    let options = new chrome.Options();
    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    await driver.get("http://ec2-3-223-123-204.compute-1.amazonaws.com/login");
    await driver.findElement(By.name("email")).sendKeys("email@gmail.com");
    await driver.findElement(By.name("senha")).sendKeys("123456",Key.ENTER);
}
testeLogin();

