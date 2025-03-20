// Implementasi pencarian produk
function searchProducts(query, products) {
  if (!query) return products;

  query = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(query) ||
      (product.description && product.description.toLowerCase().includes(query))
  );
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
function showNotification(message, type = "success") {
  // Cek apakah elemen notifikasi sudah ada
  let notification = document.getElementById("notification");

  if (!notification) {
    // Buat elemen notifikasi baru
    notification = document.createElement("div");
    notification.id = "notification";
    notification.className = "notification";
    document.body.appendChild(notification);
  }

  // Set class berdasarkan tipe notifikasi
  notification.className = `notification ${type}`;
  notification.textContent = message;
  notification.style.display = "block";

  // Sembunyikan notifikasi setelah beberapa detik
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
}

// Event listener untuk input pencarian
document.querySelector("#search-input").addEventListener("input", (e) => {
  searchProducts(e.target.value);
});
