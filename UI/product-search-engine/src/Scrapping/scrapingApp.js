// TODO:  support eBay domain
// TODO: limit the number of URLs that can be concurrently downloaded (configurable number)


const puppeteer = require('puppeteer');
const { scrapeAmazonProduct } = require('./scrapers/amazonScraper');
const dbInstance = require('../Database/database');

const runScraping = async (url) => {
  // Launch a new Puppeteer browser instance
  const browser = await puppeteer.launch();

  try {
    // Open a new browser page
    const page = await browser.newPage();
    console.log(`\nScraping product from URL: ${url}\n`);

    // Scrape the product details based on the domain
    if (url.includes('amazon')) {
      const productData = await scrapeAmazonProduct(page, url);

      dbInstance.saveScrapingResult(url, productData.name, productData.price);

    } else {
      console.log('Unsupported domain:', url);
    }
  } catch (error) {
    console.error('Error occurred during scraping:', error);
  } finally {
    // Close the browser instance
    await browser.close();
  }
};

module.exports = {
  runScraping
};
