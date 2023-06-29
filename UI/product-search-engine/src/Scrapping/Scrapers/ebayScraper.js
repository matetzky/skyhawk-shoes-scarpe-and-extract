const scrapeEbayProduct = async (page, url) => {
    await page.goto(url);
    
    const name = await page.evaluate(() => {
      const nameElement = document.querySelector('#itemTitle');
      return nameElement ? nameElement.innerText.trim() : 'N/A';
    });
  
    const price = await page.evaluate(() => {
      const priceElement = document.querySelector('#prcIsum');
      return priceElement ? priceElement.innerText.trim() : 'N/A';
    });
  
    return { name, price };
  };
  
  module.exports = {
    scrapeEbayProduct
  };
  