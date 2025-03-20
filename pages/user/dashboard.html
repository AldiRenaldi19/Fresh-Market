<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dashboard - Fresh Market</title>
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
        <!-- konten dashboard -->
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

        // Tambahkan konten dashboard
        document.querySelector(".content").innerHTML = `
            <div class="dashboard-header">
                <h1>Selamat Datang, <span id="userName"></span></h1>
                <p>Selamat datang kembali di Fresh Market</p>
            </div>

            <div class="stats-container">
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-shopping-bag"></i>
                    </div>
                    <div class="stat-info">
                        <h3 id="activeOrders">0</h3>
                        <p>Pesanan Aktif</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-heart"></i>
                    </div>
                    <div class="stat-info">
                        <h3 id="wishlistCount">0</h3>
                        <p>Wishlist</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-shopping-cart"></i>
                    </div>
                    <div class="stat-info">
                        <h3 id="totalOrders">0</h3>
                        <p>Total Pesanan</p>
                    </div>
                </div>
            </div>

            <div class="quick-actions">
                <h2>Aksi Cepat</h2>
                <div class="actions-container">
                    <div class="action-card" onclick="window.location.href='products.html'">
                        <i class="fas fa-shopping-basket"></i>
                        <span>Lihat Produk</span>
                    </div>
                    <div class="action-card" onclick="window.location.href='orders.html'">
                        <i class="fas fa-shopping-bag"></i>
                        <span>Pesanan Aktif</span>
                    </div>
                    <div class="action-card" onclick="window.location.href='wishlist.html'">
                        <i class="fas fa-heart"></i>
                        <span>Wishlist</span>
                    </div>
                </div>
            </div>

            <div class="recent-orders">
                <h2>Pesanan Terakhir</h2>
                <div id="recentOrdersList" class="orders-container">
                    <!-- Recent orders will be displayed here -->
                </div>
            </div>
        `;

        // Load dashboard data
        loadDashboardData();
      });

      function loadDashboardData() {
        const user = JSON.parse(localStorage.getItem("user"));
        const orders = JSON.parse(localStorage.getItem("orders")) || [];
        const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

        // Update nama user di dashboard
        document.getElementById("userName").textContent = user.name;

        // Filter orders untuk user yang sedang login
        const userOrders = orders.filter(
          (order) => order.userId === user.email
        );
        const activeOrders = userOrders.filter((order) =>
          ["pending", "processing", "shipping"].includes(order.status)
        );

        // Filter wishlist untuk user yang sedang login
        const userWishlist = wishlist.filter(
          (item) => item.userId === user.email
        );

        // Update dashboard statistics
        document.getElementById("activeOrders").textContent =
          activeOrders.length;
        document.getElementById("wishlistCount").textContent =
          userWishlist.length;
        document.getElementById("totalOrders").textContent = userOrders.length;

        // Display recent orders
        displayRecentOrders(userOrders.slice(0, 5)); // Show last 5 orders
      }

      function displayRecentOrders(orders) {
        const ordersList = document.getElementById("recentOrdersList");
        ordersList.innerHTML =
          orders
            .map(
              (order) => `
            <div class="order-item">
                <div class="order-info">
                    <h4>Pesanan #${order.id}</h4>
                    <p>${new Date(order.date).toLocaleDateString()}</p>
                </div>
                <div class="order-status ${order.status}">
                    ${order.status}
                </div>
                <div class="order-total">
                    Rp ${order.total.toLocaleString()}
                </div>
            </div>
        `
            )
            .join("") || "<p>Belum ada pesanan</p>";
      }
    </script>
  </body>
</html>
