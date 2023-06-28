const { runScraping } = require('./Scrapping/scrapingApp');
const dbInstance = require('./Database/database')

// Add URLs to the database
dbInstance.addURL('https://www.amazon.com/Nike-Experience-White-Cool-Grey-Reflective-Regular/dp/B00V88DL72/');
dbInstance.addURL('https://www.amazon.com/adidas-Daily-Skate-Black-White/dp/B07ZSBQ7JR/ref=sr_1_1?keywords=Adidas&qid=1687972316&sr=8-1');


// Get the URLs from the database
const urls = dbInstance.getUrls();

// Run the scraping process for each URL
urls.forEach(async (url) => {
  try {
    await runScraping(url);

    // Retrieve the scraping results from the database
    const scrapingResultsNike = dbInstance.getScrapingResultsByKeyword('Nike');
    const scrapingResultsAdidas = dbInstance.getScrapingResultsByKeyword('adidas');


    // Log the scraping results
    console.log('Current URLs in DB:', dbInstance.getUrls());
    console.log('URLs scrapingResults:', dbInstance.getScrapingResults());
    console.log('Scraping Results for keyword "Nike":', scrapingResultsNike);
    console.log('Scraping Results for keyword "Adidas:', scrapingResultsAdidas);

  } catch (error) {
    console.error('Error occurred during scraping:', error);
  }
});
