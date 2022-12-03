const puppeteer = require('puppeteer');

(async () => {
  // Launch a headless Chrome browser
  const browser = await puppeteer.launch();

  // Open a new page in the browser
  const page = await browser.newPage();

  // Navigate to the website
  await page.goto('https://zoro.to/home');

  // Select the element with the ID "main-content"
  const element = await page.$('#anime-trending');

  // Extract the text of the selected element
  const text = await element.evaluate((el) => el.textContent);
  const newtext = text.replace(/\s+/g, " ");
  // Print the text to the console
  console.log(newtext);

  // Close the browser
  await browser.close();
})();
// this is written by help of chatgpt