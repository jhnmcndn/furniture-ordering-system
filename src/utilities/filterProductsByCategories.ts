export function filterProductsByCategories(products, category) {
   // Filter products to get items in the specified category
   const filteredProducts = products.filter((product) => product.category === category);

   // Log the number of products in the specified category
   console.log(`Number of ${category} products: ${filteredProducts.length}`);

   // Log details of each product in the specified category
   filteredProducts.forEach((product) => {
      console.log(`Name: ${product.name}, Quantity: ${product.quantity}, Price: $${product.price}`);
   });
   return filteredProducts;
}
