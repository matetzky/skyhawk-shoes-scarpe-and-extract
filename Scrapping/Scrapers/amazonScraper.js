const scrapeAmazonProduct = async (page, url) => {

    // Navigate to the product page
    await page.goto(url);

    // Get the HTML content of the page
    const html = await page.content();
  
    // Regular expression to match the price
    const priceRegex = /<span class="a-offscreen">(.*?)<\/span>/s;

    // Find a match for the price in the HTML content
    const priceMatch = html.match(priceRegex);

    // Extract the price from the match, or set it as 'N/A' if no match found
    const price = priceMatch ? priceMatch[1].trim() : 'N/A';
  
    // Find the DOM elements for the product name
    const nameElement1 = await page.$('#productTitle');
    const nameElement2 = await page.$('#title');
    
    // Evaluate the element and retrieve its inner text for the name, or set it as 'N/A' if no element found
    const name = await (nameElement1 || nameElement2)?.evaluate(element => element.innerText.trim()) || 'N/A';
  
    // Return the scraped name and price
    return { name, price };
  };
  
  module.exports = {
    scrapeAmazonProduct
  };
  