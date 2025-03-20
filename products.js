const filterSystem = {
  filterByCategory(category) {
    const products = document.querySelectorAll(".product-card");
    products.forEach((product) => {
      const productCategory = product.dataset.category;
      product.style.display =
        category === "all" || productCategory === category ? "block" : "none";
    });
  },

  sortProducts(method) {
    const productContainer = document.querySelector(".product-container");
    const products = Array.from(document.querySelectorAll(".product-card"));

    products.sort((a, b) => {
      const priceA = parseFloat(a.dataset.price);
      const priceB = parseFloat(b.dataset.price);

      return method === "asc" ? priceA - priceB : priceB - priceA;
    });

    productContainer.innerHTML = "";
    products.forEach((product) => productContainer.appendChild(product));
  },
};
