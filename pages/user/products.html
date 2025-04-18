<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Produk - Fresh Market</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
    />
    <link rel="stylesheet" href="../../css/styles.css" />
  </head>
  <body>
    <div class="dashboard-container">
      <div class="content">
        <h1>Produk Tersedia</h1>
        <div class="search-filter">
          <input type="text" id="searchInput" placeholder="Cari produk..." />
          <select id="categoryFilter">
            <option value="">Semua Kategori</option>
            <option value="Sayuran">Sayuran</option>
            <option value="Buah">Buah</option>
            <option value="Rempah">Rempah</option>
          </select>
        </div>
        <div class="products-grid" id="productsContainer">
          <!-- Produk akan ditampilkan di sini -->
        </div>
      </div>
    </div>

    <script src="../../js/init.js"></script>
    <script src="../../js/auth.js"></script>
    <script>
      document.addEventListener("DOMContentLoaded", function () {
        if (!checkUserAccess()) return;

        // Muat navbar dan sidebar
        loadUserNavbar();
        loadUserSidebar();

        // Ambil elemen yang diperlukan
        const productsContainer = document.getElementById("productsContainer");
        const searchInput = document.getElementById("searchInput");
        const categoryFilter = document.getElementById("categoryFilter");

        // Fungsi untuk memuat dan menampilkan produk
        async function loadProducts() {
          showLoading();

          try {
            // Implementasi caching
            const cachedProducts = await getCachedProducts();
            if (cachedProducts) {
              displayProducts(cachedProducts);
              return;
            }

            const products = JSON.parse(localStorage.getItem("products")) || [];
            const searchTerm = searchInput.value.toLowerCase();
            const selectedCategory = categoryFilter.value;

            const filteredProducts = products.filter((product) => {
              const matchSearch = product.name
                .toLowerCase()
                .includes(searchTerm);
              const matchCategory =
                !selectedCategory || product.category === selectedCategory;
              return matchSearch && matchCategory && product.stock > 0; // Tambah filter stok
            });

            // Simpan ke cache
            cacheProducts(filteredProducts);
            displayProducts(filteredProducts);
          } catch (error) {
            showError("Gagal memuat produk");
          } finally {
            hideLoading();
          }
        }

        // Fungsi untuk menambah ke keranjang
        window.addToCart = function (productId) {
          const user = JSON.parse(localStorage.getItem("user"));
          if (!user) {
            alert("Silakan login terlebih dahulu");
            window.location.href = "../login.html";
            return;
          }

          const products = JSON.parse(localStorage.getItem("products")) || [];
          const product = products.find((p) => p.id === productId);

          if (!product) {
            alert("Produk tidak ditemukan");
            return;
          }

          // Gunakan cart class jika tersedia
          if (typeof cart !== "undefined") {
            cart.addItem(user.email, product);
          } else {
            // Fallback jika cart.js tidak dimuat
            const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
            const existingItem = cartItems.find(
              (item) => item.userId === user.email && item.id === productId
            );

            if (existingItem) {
              existingItem.quantity += 1;
            } else {
              cartItems.push({
                userId: user.email,
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1,
                addedAt: new Date().toISOString(),
              });
            }

            localStorage.setItem("cart", JSON.stringify(cartItems));
          }

          alert("Produk berhasil ditambahkan ke keranjang!");
        };

        // Fungsi untuk menambah ke wishlist
        window.addToWishlist = function (productId) {
          const user = JSON.parse(localStorage.getItem("user"));
          if (!user) {
            alert("Silakan login terlebih dahulu");
            window.location.href = "../login.html";
            return;
          }

          const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
          const exists = wishlist.some(
            (item) => item.userId === user.email && item.productId === productId
          );

          if (!exists) {
            wishlist.push({
              userId: user.email,
              productId: productId,
              addedAt: new Date().toISOString(),
            });
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
            alert("Produk berhasil ditambahkan ke wishlist!");
          } else {
            alert("Produk sudah ada di wishlist!");
          }
        };

        // Event listeners untuk pencarian dan filter
        searchInput.addEventListener("input", loadProducts);
        categoryFilter.addEventListener("change", loadProducts);

        // Muat produk saat halaman dimuat
        loadProducts();
      });
    </script>

    <style>
      .products-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        padding: 20px;
      }

      .product-card {
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        transition: transform 0.2s;
      }

      .product-card:hover {
        transform: translateY(-5px);
      }

      .product-card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      .product-info {
        padding: 15px;
      }

      .product-info h3 {
        margin: 0 0 10px 0;
        font-size: 1.1em;
      }

      .price {
        color: #2e7d32;
        font-weight: bold;
        font-size: 1.2em;
        margin: 5px 0;
      }

      .stock {
        color: #666;
        font-size: 0.9em;
        margin: 5px 0;
      }

      .product-actions {
        display: flex;
        gap: 10px;
        margin-top: 10px;
      }

      .add-to-cart-btn {
        flex: 1;
        padding: 8px;
        background: #2e7d32;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }

      .wishlist-btn {
        padding: 8px;
        background: white;
        color: #2e7d32;
        border: 1px solid #2e7d32;
        border-radius: 4px;
        cursor: pointer;
      }

      .search-filter {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
      }

      .search-filter input,
      .search-filter select {
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
      }

      .search-filter input {
        flex: 1;
      }
    </style>
  </body>
</html>
