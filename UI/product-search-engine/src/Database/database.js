class MockDatabase {
    constructor() {
      this.urls = [];
      this.scrapingResults = new Map();
    }
  
    addURL(url) {
      this.urls.push(url);
    }

    removeUrl(url) {
        const index = this.urls.indexOf(url);
        if (index > -1) {
          this.urls.splice(index, 1);
        }
      }

    getUrls() {
        return this.urls.slice(); // Return a copy of the URLs array
      }

  
    saveScrapingResult(url, name, price) {
      this.scrapingResults.set(url, { name, price });
    }
    
    getScrapingResults() {
        const results = [];
        for (const [url, data] of this.scrapingResults) {
          results.push({ url, ...data });
        }
        return results;
      }
      
    getScrapingResultsByKeyword(keyword) {
      const results = [];
      for (const [url, data] of this.scrapingResults) {
        if (data.name.includes(keyword)) {
          results.push({ url, ...data });
        }
      }
      return results;
    }
  }
  
// Create a singleton instance
const dbInstance = new MockDatabase();

// Export the singleton instance
module.exports = dbInstance;