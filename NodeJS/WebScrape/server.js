const puppeteer = require('puppeteer');
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
(async () => {
  // Launch a headless Chrome browser
  const browser = await puppeteer.launch();

  // Open a new page in the browser
  const page = await browser.newPage();

  // Navigate to the website
  await page.goto('https://nekobin.com/');

  // Select the element with the ID "main-content"
  const input = await page.waitForSelector('.CodeMirror-line');
  await input.type('Hello, asdfsafworld!');

  const element = await page.$('.CodeMirror-line');
  // Extract the text of the selected element
  const text = await element.evaluate((el) => el.textContent);
  const element2 = await page.$('.actions');
  // Extract the text of the selected element
  const text2 = await element2.evaluate((el) => el.innerHTML);
  console.log(text2);
  // const newtext = text.replace(/\s+/g, " ");
  // Print the text to the console
  // console.log(newtext);
  const button = await page.waitForSelector('#save');
  await button.click();
  // const newpage = await browser.newPage();
  await sleep(10000);
  // console.log(page.url());
  const url = await page.$('#url');
  const urltext = await url.evaluate((el) => el.textContent);
  console.log(urltext);
  // Close the browser
  await browser.close();
})();
// this is written by help of chatgpt