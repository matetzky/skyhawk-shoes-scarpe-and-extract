const db = require('./database');

// Add URLs to scrape
db.addURL('https://www.amazon.com/product1');
db.addURL('https://www.ebay.com/product2');

// Save scraping results
db.saveScrapingResult('https://www.amazon.com/product1', 'Nike Air Jordan', '19.99');
db.saveScrapingResult('https://www.ebay.com/product2', 'adidas runner', '29.99');


// Get saved urls
const savedUrls = db.getUrls();

// Get scraping results by keyword
const results = db.getScrapingResultsByKeyword('Nike');
console.log('----------------------');
console.log('saved URLs:\n', savedUrls);
console.log('----------------------');
console.log('Scraping Results (For keyWord: "Nike"):\n', results);
console.log('----------------------');
