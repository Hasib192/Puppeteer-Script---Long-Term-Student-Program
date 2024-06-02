const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://www.google.com/");

  await page.type(".gLFyf", "a new world");

  await page.keyboard.press("Enter");

  await page.waitForSelector("h3");

  const searchResults = await page.evaluate(() => {
    const result = [];
    const items = document.querySelectorAll("h3");
    items.forEach((element) => {
      result.push(element.innerText);
    });
    return result;
  });

  console.log("The result is: ");
  searchResults.forEach((result, index) => {
    console.log(`${index + 1}: ${result}`);
  });

  await browser.close();
})();
