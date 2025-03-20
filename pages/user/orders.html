<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pesanan Saya - Fresh Market</title>
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
    <!-- Gunakan navbar yang sama seperti dashboard -->

    <div class="dashboard-container">
      <!-- Gunakan sidebar yang sama seperti dashboard -->

      <div class="content">
        <h1>Pesanan Saya</h1>
        <div class="orders-list" id="ordersList">
          <!-- Pesanan akan ditampilkan di sini -->
        </div>
      </div>
    </div>

    <script src="../../js/init.js"></script>
    <script src="../../js/auth.js"></script>
    <script>
      document.addEventListener("DOMContentLoaded", function () {
        if (!checkUserAccess()) return;

        // Update nama user
        const user = JSON.parse(localStorage.getItem("user"));
        document.getElementById("userNameHeader").textContent = user.name;

        loadUserOrders();
      });

      function loadUserOrders() {
        const user = JSON.parse(localStorage.getItem("user"));
        const orders = JSON.parse(localStorage.getItem("orders")) || [];
        const userOrders = orders.filter(
          (order) => order.userId === user.email
        );

        const container = document.getElementById("ordersList");
        container.innerHTML =
          userOrders
            .map(
              (order) => `
            <div class="order-card">
                <div class="order-header">
                    <h3>Pesanan #${order.id}</h3>
                    <span class="order-date">${new Date(
                      order.date
                    ).toLocaleDateString()}</span>
                </div>
                <div class="order-items">
                    ${order.items
                      .map(
                        (item) => `
                        <div class="order-item">
                            <span>${item.quantity}x ${item.name}</span>
                            <span>Rp ${(
                              item.price * item.quantity
                            ).toLocaleString()}</span>
                        </div>
                    `
                      )
                      .join("")}
                </div>
                <div class="order-footer">
                    <span class="order-status ${order.status}">${
                order.status
              }</span>
                    <span class="order-total">Total: Rp ${order.total.toLocaleString()}</span>
                </div>
            </div>
        `
            )
            .join("") || "<p>Belum ada pesanan</p>";
      }
    </script>

    <style>
      .order-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        margin-bottom: 15px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .order-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
      }

      .order-items {
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        padding: 10px 0;
      }

      .order-item {
        display: flex;
        justify-content: space-between;
        padding: 5px 0;
      }

      .order-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;
      }

      .order-status {
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 0.9em;
      }

      .order-status.pending {
        background: #fff3cd;
        color: #856404;
      }
      .order-status.processing {
        background: #cce5ff;
        color: #004085;
      }
      .order-status.shipping {
        background: #d1ecf1;
        color: #0c5460;
      }
      .order-status.completed {
        background: #d4edda;
        color: #155724;
      }
      .order-status.cancelled {
        background: #f8d7da;
        color: #721c24;
      }

      .order-total {
        font-weight: 600;
        color: #2e7d32;
      }
    </style>
  </body>
</html>
