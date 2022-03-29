const { Builder, By, Key } = require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');


async function testePesquisa(){
    
    let options = new chrome.Options();
    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    await driver.get("http://ec2-3-223-123-204.compute-1.amazonaws.com");

    await driver.findElement(By.id("input-destino")).click();
    let dados = await driver.findElements(By.className("option"));
    for(let e of dados){
        console.log(await e.getText(), "Teste");
    }
    await driver.findElement(By.className("option")).click();
    await driver.findElement(By.id("confirm-search")).click();
    
    await driver.quit();
}
testePesquisa();

