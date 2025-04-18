// Global state untuk keranjang belanja
let cart = {
  items: [],
  total: 0,
};

// Fungsi untuk memperbarui tampilan keranjang
function updateCartDisplay() {
  const cartCount = document.querySelector(".cart-count");
  cartCount.textContent = cart.items.length;
}

// Fungsi untuk menambah item ke keranjang
function addToCart(productId, name, price) {
  cart.items.push({
    id: productId,
    name: name,
    price: price,
    quantity: 1,
  });
  cart.total += price;
  updateCartDisplay();

  // Animasi feedback
  showNotification("Produk ditambahkan ke keranjang!");
}

// Fungsi untuk filter produk
function filterProducts(category) {
  const products = document.querySelectorAll(".product-card");
  products.forEach((product) => {
    if (category === "Semua" || product.dataset.category === category) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

// Fungsi pencarian produk
function searchProducts(query) {
  const products = document.querySelectorAll(".product-card");
  products.forEach((product) => {
    const name = product
      .querySelector(".product-name")
      .textContent.toLowerCase();
    const description = product
      .querySelector(".product-description")
      .textContent.toLowerCase();

    if (
      name.includes(query.toLowerCase()) ||
      description.includes(query.toLowerCase())
    ) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

// Format mata uang
function formatCurrency(amount) {
  return "Rp " + amount.toLocaleString("id-ID");
}

// Ambil parameter URL
function getURLParameter(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

// Cek stock
function isInStock(product) {
  return product.stock > 0;
}

// Inisialisasi kategori
function initCategories() {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const categories = [
    ...new Set(products.map((p) => p.category).filter((c) => c)),
  ];

  return categories;
}

// Tampilkan notifikasi
function showNotification(message) {
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  // Filter buttons
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      filterProducts(button.textContent);
    });
  });

  // Search functionality
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");

  searchButton.addEventListener("click", () => {
    searchProducts(searchInput.value);
  });

  searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      searchProducts(searchInput.value);
    }
  });

  // Add to cart buttons
  const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const productCard = e.target.closest(".product-card");
      const productId = productCard.dataset.productId;
      const productName =
        productCard.querySelector(".product-name").textContent;
      const productPrice = parseInt(
        productCard
          .querySelector(".product-price")
          .textContent.replace(/\D/g, "")
      );

      addToCart(productId, productName, productPrice);
    });
  });
});
