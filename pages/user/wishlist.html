<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Wishlist - Fresh Market</title>
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
    <!-- Gunakan navbar yang sama -->

    <div class="dashboard-container">
      <!-- Gunakan sidebar yang sama -->

      <div class="content">
        <h1>Wishlist Saya</h1>
        <div class="wishlist-grid" id="wishlistContainer">
          <!-- Wishlist akan ditampilkan di sini -->
        </div>
      </div>
    </div>

    <script src="../../js/init.js"></script>
    <script src="../../js/auth.js"></script>
    <script>
      document.addEventListener("DOMContentLoaded", function () {
        if (!checkUserAccess()) return;

        const user = JSON.parse(localStorage.getItem("user"));
        document.getElementById("userNameHeader").textContent = user.name;

        loadWishlist();
      });

      function loadWishlist() {
        const user = JSON.parse(localStorage.getItem("user"));
        const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        const userWishlist = wishlist.filter(
          (item) => item.userId === user.email
        );
        const products = JSON.parse(localStorage.getItem("products")) || [];

        const container = document.getElementById("wishlistContainer");
        container.innerHTML =
          userWishlist
            .map((wishItem) => {
              const product = products.find((p) => p.id === wishItem.productId);
              if (!product) return "";

              return `
                <div class="wishlist-card">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="wishlist-info">
                        <h3>${product.name}</h3>
                        <p>Rp ${product.price.toLocaleString()}</p>
                    </div>
                    <div class="wishlist-actions">
                        <button onclick="addToCart('${
                          product.id
                        }')" class="cart-btn">
                            <i class="fas fa-shopping-cart"></i> Tambah ke Keranjang
                        </button>
                        <button onclick="removeFromWishlist('${
                          product.id
                        }')" class="remove-btn">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
            })
            .join("") || "<p>Wishlist masih kosong</p>";
      }

      function removeFromWishlist(productId) {
        const user = JSON.parse(localStorage.getItem("user"));
        let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

        wishlist = wishlist.filter(
          (item) =>
            !(item.userId === user.email && item.productId === productId)
        );

        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        loadWishlist();
      }

      function addToCart(productId) {
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
      }
    </script>

    <style>
      .wishlist-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        padding: 20px;
      }

      .wishlist-card {
        background: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .wishlist-card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      .wishlist-info {
        padding: 15px;
      }

      .wishlist-actions {
        padding: 15px;
        display: flex;
        gap: 10px;
      }

      .cart-btn,
      .remove-btn {
        padding: 8px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 5px;
      }

      .cart-btn {
        background: #2e7d32;
        color: white;
        flex: 1;
      }

      .remove-btn {
        background: #dc3545;
        color: white;
      }
    </style>
  </body>
</html>
