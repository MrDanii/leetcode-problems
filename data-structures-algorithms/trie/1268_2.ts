// * Not Mine, but efficient
function suggestedProducts(products: string[], searchWord: string): string[][] {
  // Step 1: Sort the products lexicographically
  products.sort();

  const results: string[][] = [];
  let start = 0; // Start of the search range

  for (let i = 0; i < searchWord.length; i++) {
      const prefix = searchWord.slice(0, i + 1);
      const matches: string[] = [];

      // Step 2: Use a linear scan starting from the last found position
      while (start < products.length && !products[start].startsWith(prefix)) {
          start++;
      }

      // Step 3: Add up to 3 matching products
      for (let j = 0; j < 3 && start + j < products.length; j++) {
          if (products[start + j].startsWith(prefix)) {
              matches.push(products[start + j]);
          } else {
              break;
          }
      }

      results.push(matches);
  }

  return results;
}