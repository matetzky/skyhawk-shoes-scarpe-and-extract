import React, { useState } from 'react';
import { runScraping } from 'scrapingApp.js';
import { dbInstance } from  'database.js'

// TODO: support paging 
// Add Styling (.css)

const App = () => {
  const [urls, setUrls] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = e.target.url.value;

    // Add the URL to the local database instance
    dbInstance.addURL(url);
    setUrls([...urls, url]);

    // Trigger the scraping process
    runScraping();
    e.target.reset();
  };

  return (
    <div>
      <h1>URL Scraper</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="url" placeholder="Enter URL" />
        <button type="submit">Save</button>
      </form>

      <div>
        <h2>URLs</h2>
        <ul>
          {urls.map((url) => (
            <li key={url}>{url}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
