# skyhawk-shoes-scarpe-and-extract
Home Assignment for Skyhawk security (Full stack candidate). This application will scrape/extract/ products and prices from various sites.

# Web Scraping Application

This project allows you to scrape product data from specific URLs, store the results in a mocked database, and provide a user interface for inserting new URLs and performing text queries to search for products.

## Dependencies

To run this project, you need to have the following dependencies installed:

- Node.js (v12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the project repository: 

git clone https://github.com/matetzky/skyhawk-shoes-scarpe-and-extract

2. Change into the project directory:

cd <project-directory>


3. Install the project dependencies:

npm install


## Scraping Modules

The scraping modules are responsible for extracting product information from specific websites. Currently, the project includes a scraper for Amazon products located in the `scrapers/amazonScraper.js` file. You can add additional scrapers for other websites by creating new scraper files in the `scrapers` directory and implementing the necessary scraping logic.

## Mocked Database

The project uses a mocked database to store the URLs and scraping results. The mocked database is implemented in the `database.js` file. It provides methods for adding URLs, saving scraping results, and querying the data based on search keywords. The database instance is exported as a singleton, allowing access from multiple parts of the project.

## User Interface

The user interface is built using React.js and provides a simple web interface for interacting with the project. It allows users to insert new URLs into the database and perform text queries to search for products. The UI is located in the `react-app` directory and can be started using the `npm start` command.

## Usage

To use the project, follow these steps:

1. Start the React UI:

cd product-search-engine
npm start


2. Open your browser and navigate to `http://localhost:3000` to access the UI.

3. Use the UI to insert new URLs by entering them in the "Insert URL" field and clicking the "Insert" button.

4. Perform text queries by entering keywords in the "Search Products" field and clicking the "Search" button. The results will be displayed below.

## Contributions

Contributions to this project are welcome! If you find any issues or have suggestions for improvements, please submit a pull request or open an issue on the project repository.

## License

This project is licensed under the [MIT License](LICENSE).
