const axios = require('axios');
const cheerio = require('cheerio');

// Function to download a web page
async function downloadPage(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error downloading page: ${url}`, error);
    return null;
  }
}

// Function to scrape product information from a web page
function scrapeProductInfo(html, nameSelector, priceSelector) {
  const $ = cheerio.load(html);

  // Extract product names using CSS selectors
  const names = $(nameSelector)
    .map((_, element) => $(element).text())
    .get();

  // Extract product prices using CSS selectors
  const prices = $(priceSelector)
    .map((_, element) => $(element).text())
    .get();

  return {
    names,
    prices,
  };
}

// Function to scrape products and prices from multiple URLs
async function scrapeProducts(urls, nameSelector, priceSelector) {
  const products = [];

  for (const url of urls) {
    const html = await downloadPage(url);
    if (html) {
      const scrapedData = scrapeProductInfo(html, nameSelector, priceSelector);
      products.push(scrapedData);
    }
  }

  return products;
}

// Example usage
const urls = [
  'https://example.com/page1',
  'https://example.com/page2',
  'https://example.com/page3',
];

const nameSelector = '.product-name';
const priceSelector = '.product-price';

scrapeProducts(urls, nameSelector, priceSelector)
  .then((products) => {
    console.log(products);
  })
  .catch((error) => {
    console.error('Error scraping products:', error);
  });
