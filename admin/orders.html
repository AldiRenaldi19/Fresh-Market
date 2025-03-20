<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Kelola Pesanan - Admin Fresh Market</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
    />
    <link rel="stylesheet" href="../css/styles.css" />
  </head>
  <body>
    <div class="admin-container">
      <!-- Sidebar yang sama seperti dashboard -->
      <div class="admin-sidebar">
        <!-- ... copy sidebar dari dashboard.html ... -->
      </div>

      <div class="admin-content">
        <div class="admin-header">
          <h1>Kelola Pesanan</h1>
          <div class="order-filter">
            <input type="text" id="searchOrder" placeholder="Cari pesanan..." />
            <select id="statusFilter">
              <option value="">Semua Status</option>
              <option value="pending">Pending</option>
              <option value="processing">Diproses</option>
              <option value="shipping">Dikirim</option>
              <option value="completed">Selesai</option>
              <option value="cancelled">Dibatalkan</option>
            </select>
          </div>
        </div>

        <div class="orders-list" id="ordersList">
          <!-- Pesanan akan ditampilkan di sini -->
        </div>
      </div>
    </div>

    <script src="../js/init.js"></script>
    <script>
      document.addEventListener("DOMContentLoaded", function () {
        // Cek autentikasi admin
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user || !user.isAdmin) {
          alert("Anda tidak memiliki akses ke halaman admin!");
          window.location.href = "../pages/login.html";
          return;
        }

        loadOrders();

        // Event listeners
        document
          .getElementById("searchOrder")
          .addEventListener("input", loadOrders);
        document
          .getElementById("statusFilter")
          .addEventListener("change", loadOrders);
      });

      function loadOrders() {
        const orders = JSON.parse(localStorage.getItem("orders")) || [];
        const searchTerm = document
          .getElementById("searchOrder")
          .value.toLowerCase();
        const selectedStatus = document.getElementById("statusFilter").value;

        const filteredOrders = orders.filter((order) => {
          const matchSearch =
            order.id.toLowerCase().includes(searchTerm) ||
            order.customerName.toLowerCase().includes(searchTerm);
          const matchStatus =
            !selectedStatus || order.status === selectedStatus;
          return matchSearch && matchStatus;
        });

        const container = document.getElementById("ordersList");
        container.innerHTML = filteredOrders
          .map(
            (order) => `
                <div class="order-card">
                    <div class="order-header">
                        <h3>Order #${order.id}</h3>
                        <span class="status ${order.status}">${
              order.status
            }</span>
                    </div>
                    <div class="order-details">
                        <p><strong>Pelanggan:</strong> ${order.customerName}</p>
                        <p><strong>Tanggal:</strong> ${new Date(
                          order.date
                        ).toLocaleDateString()}</p>
                        <p><strong>Total:</strong> Rp ${order.total.toLocaleString()}</p>
                    </div>
                    <div class="order-actions">
                        <button onclick="updateStatus('${
                          order.id
                        }')" class="status-btn">
                            <i class="fas fa-sync-alt"></i> Update Status
                        </button>
                        <button onclick="viewDetails('${
                          order.id
                        }')" class="view-btn">
                            <i class="fas fa-eye"></i> Lihat Detail
                        </button>
                    </div>
                </div>
            `
          )
          .join("");
      }

      function updateStatus(orderId) {
        const orders = JSON.parse(localStorage.getItem("orders")) || [];
        const order = orders.find((o) => o.id === orderId);

        if (order) {
          const statuses = [
            "pending",
            "processing",
            "shipping",
            "completed",
            "cancelled",
          ];
          const currentIndex = statuses.indexOf(order.status);
          const nextStatus = statuses[(currentIndex + 1) % statuses.length];

          order.status = nextStatus;
          localStorage.setItem("orders", JSON.stringify(orders));

          // Tambah aktivitas
          addActivity(
            "order",
            `Status pesanan #${orderId} diubah ke ${nextStatus}`
          );

          loadOrders();
          alert(`Status pesanan berhasil diubah ke ${nextStatus}`);
        }
      }

      function viewDetails(orderId) {
        // Implementasi detail pesanan
        alert("Fitur detail pesanan akan segera hadir!");
      }

      function addActivity(type, description) {
        const activities = JSON.parse(localStorage.getItem("activities")) || [];
        activities.unshift({
          type,
          description,
          timestamp: new Date().getTime(),
        });

        if (activities.length > 50) activities.pop();
        localStorage.setItem("activities", JSON.stringify(activities));
      }
    </script>

    <style>
      .order-filter {
        display: flex;
        gap: 20px;
        margin-bottom: 20px;
      }

      .order-filter input,
      .order-filter select {
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
      }

      .order-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        margin-bottom: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .order-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
      }

      .order-actions {
        display: flex;
        gap: 10px;
        margin-top: 15px;
      }

      .status-btn,
      .view-btn {
        padding: 8px 15px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 5px;
      }

      .status-btn {
        background: #2e7d32;
        color: white;
      }

      .view-btn {
        background: #1976d2;
        color: white;
      }

      .status {
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 0.9em;
      }

      .status.pending {
        background: #fff3cd;
        color: #856404;
      }
      .status.processing {
        background: #cce5ff;
        color: #004085;
      }
      .status.shipping {
        background: #d1ecf1;
        color: #0c5460;
      }
      .status.completed {
        background: #d4edda;
        color: #155724;
      }
      .status.cancelled {
        background: #f8d7da;
        color: #721c24;
      }
    </style>
  </body>
</html>
