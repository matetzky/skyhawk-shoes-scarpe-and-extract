# skyhawk-shoes-scarpe-and-extract
Home Assignment for Skyhawk security (Full stack candidate). This application will scrape/extract/ products and prices from various sites.

# Web Scraping Application

This is a Node.js application that allows you to scrape and extract product information from various websites. It downloads the HTML pages, parses them using CSS selectors, and retrieves the product names and prices.

## Prerequisites

- Node.js (version X.X.X or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository or download the source code.
2. Open a terminal or command prompt and navigate to the project directory.
3. Run the following command to install the required dependencies:


## Usage

npm install

1. Open the `scrapingApp.js` file in a text editor.
2. Modify the `urls`, `nameSelector`, and `priceSelector` variables according to your requirements. Add the URLs of the pages you want to scrape and specify the appropriate CSS selectors to extract the product names and prices from the HTML.
3. Save the changes.
4. In a terminal or command prompt, navigate to the project directory.
5. Run the following command to execute the application:

node scrapingApp.js

6. The application will start scraping the web pages and display the extracted product information in the console.

## Dependencies

- axios
- cheerio

These dependencies are automatically installed when running `npm install`.


