class ProductReview {
  constructor(productId) {
    this.productId = productId;
    this.reviews = [];
  }

  addReview(rating, comment, userId) {
    const review = {
      id: Date.now(),
      rating,
      comment,
      userId,
      date: new Date(),
    };
    this.reviews.push(review);
    this.updateAverageRating();
  }

  updateAverageRating() {
    const total = this.reviews.reduce((sum, review) => sum + review.rating, 0);
    this.averageRating = total / this.reviews.length;
  }
}

// Buat file products.json
const products = {
  items: [
    {
      id: 1,
      name: "Bayam Organik",
      price: 8000,
      category: "Sayuran Daun",
      image: "./assets/images/bayam.jpg",
    },
    // ... produk lainnya
  ],
};

// Load products
function loadProducts() {
  const container = document.getElementById("productsContainer");
  products.items.forEach((product) => {
    container.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Rp ${product.price}</p>
                <button onclick="addToCart(${product.id})">Tambah ke Keranjang</button>
            </div>
        `;
  });
}
