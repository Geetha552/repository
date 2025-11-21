function processProducts(products) {
  // Step 1: Extract product names using map()
  const productNames = products.map(product => product.name);
  console.log("Product Names Array:", productNames);

  // Step 2: Use forEach() to log price-based messages
  products.forEach(product => {
    if (product.price > 50) {
      console.log(`${product.name} is above $50`);
    } else {
      console.log(`${product.name} is below $50`);
    }
  });
}

// Example Input
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 }
];

// Call the function
processProducts(products);
