<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Laporan - Admin Fresh Market</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
    />
    <link rel="stylesheet" href="../css/styles.css" />
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  </head>
  <body>
    <div class="admin-container">
      <div class="admin-sidebar">
        <div class="admin-logo">
          <img src="../assets/images/logo.png" alt="Fresh Market Logo" />
          <h2>Admin Panel</h2>
        </div>
        <ul class="admin-menu">
          <li>
            <a href="dashboard.html"
              ><i class="fas fa-tachometer-alt"></i> Dashboard</a
            >
          </li>
          <li>
            <a href="products.html"><i class="fas fa-box"></i> Produk</a>
          </li>
          <li>
            <a href="orders.html"
              ><i class="fas fa-shopping-cart"></i> Pesanan</a
            >
          </li>
          <li>
            <a href="users.html"><i class="fas fa-users"></i> Pengguna</a>
          </li>
          <li class="active">
            <a href="reports.html"><i class="fas fa-chart-bar"></i> Laporan</a>
          </li>
          <li>
            <a href="#" onclick="logout()"
              ><i class="fas fa-sign-out-alt"></i> Keluar</a
            >
          </li>
        </ul>
      </div>

      <div class="admin-content">
        <div class="admin-header">
          <h1>Laporan</h1>
          <div class="report-filter">
            <select id="reportType">
              <option value="daily">Harian</option>
              <option value="weekly">Mingguan</option>
              <option value="monthly">Bulanan</option>
            </select>
            <div class="date-filter">
              <input type="date" id="startDate" />
              <span>sampai</span>
              <input type="date" id="endDate" />
            </div>
            <button onclick="generateReport()" class="generate-btn">
              <i class="fas fa-sync-alt"></i> Generate Laporan
            </button>
          </div>
        </div>

        <div class="report-container">
          <div class="report-section">
            <h2>Grafik Penjualan</h2>
            <canvas id="salesChart"></canvas>
          </div>

          <div class="report-section">
            <h2>Produk Terlaris</h2>
            <div id="topProducts" class="top-products">
              <!-- Produk terlaris akan ditampilkan di sini -->
            </div>
          </div>

          <div class="report-section">
            <h2>Ringkasan Keuangan</h2>
            <div class="financial-summary">
              <div class="summary-card">
                <h3>Total Pendapatan</h3>
                <p id="totalRevenue">Rp 0</p>
              </div>
              <div class="summary-card">
                <h3>Rata-rata Order</h3>
                <p id="averageOrder">Rp 0</p>
              </div>
              <div class="summary-card">
                <h3>Total Transaksi</h3>
                <p id="totalTransactions">0</p>
              </div>
            </div>
          </div>

          <div class="report-actions">
            <button onclick="exportToExcel()" class="export-btn">
              <i class="fas fa-download"></i> Export ke Excel
            </button>
          </div>
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

        generateReport();
      });

      function generateReport() {
        const reportType = document.getElementById("reportType").value;
        const orders = JSON.parse(localStorage.getItem("orders")) || [];
        const products = JSON.parse(localStorage.getItem("products")) || [];

        // Generate data untuk grafik
        const salesData = generateSalesData(orders, reportType);
        updateSalesChart(salesData);

        // Generate produk terlaris
        updateTopProducts(orders, products);

        // Update ringkasan keuangan
        updateFinancialSummary(orders);
      }

      function generateSalesData(orders, reportType) {
        // Ambil data orders dan kelompokkan berdasarkan tanggal
        const salesByDate = {};
        orders.forEach((order) => {
          const date = new Date(order.date);
          const dateKey = date.toLocaleDateString("id-ID", {
            weekday: "short",
          });
          if (!salesByDate[dateKey]) {
            salesByDate[dateKey] = 0;
          }
          salesByDate[dateKey] += order.total;
        });

        // Siapkan data untuk 7 hari terakhir
        const days = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
        const labels = [];
        const data = [];

        for (let i = 6; i >= 0; i--) {
          const date = new Date();
          date.setDate(date.getDate() - i);
          const dateKey = date.toLocaleDateString("id-ID", {
            weekday: "short",
          });
          labels.push(dateKey);
          data.push(salesByDate[dateKey] || 0);
        }

        return { labels, data };
      }

      function updateSalesChart(salesData) {
        const ctx = document.getElementById("salesChart").getContext("2d");

        if (window.salesChart) {
          window.salesChart.destroy();
        }

        window.salesChart = new Chart(ctx, {
          type: "line",
          data: {
            labels: salesData.labels,
            datasets: [
              {
                label: "Penjualan",
                data: salesData.data,
                borderColor: "#2e7d32",
                tension: 0.1,
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  callback: function (value) {
                    return "Rp " + value.toLocaleString();
                  },
                },
              },
            },
          },
        });
      }

      function updateTopProducts(orders, products) {
        // Hitung penjualan per produk
        const productSales = {};
        orders.forEach((order) => {
          order.items.forEach((item) => {
            if (!productSales[item.productId]) {
              productSales[item.productId] = {
                sold: 0,
                revenue: 0,
              };
            }
            productSales[item.productId].sold += item.quantity;
            productSales[item.productId].revenue += item.price * item.quantity;
          });
        });

        // Konversi ke array dan urutkan berdasarkan pendapatan
        const topProductsData = Object.entries(productSales)
          .map(([productId, sales]) => {
            const product = products.find((p) => p.id === productId);
            return {
              name: product ? product.name : "Produk Tidak Ditemukan",
              sold: sales.sold,
              revenue: sales.revenue,
            };
          })
          .sort((a, b) => b.revenue - a.revenue)
          .slice(0, 5); // Ambil 5 produk teratas

        const container = document.getElementById("topProducts");
        container.innerHTML = topProductsData
          .map(
            (product) => `
                <div class="top-product-item">
                    <div class="product-rank">
                        <h3>${product.name}</h3>
                        <p>Terjual: ${product.sold} unit</p>
                    </div>
                    <div class="product-revenue">
                        <p>Rp ${product.revenue.toLocaleString()}</p>
                    </div>
                </div>
            `
          )
          .join("");
      }

      function updateFinancialSummary(orders) {
        // Hitung total pendapatan
        const totalRevenue = orders.reduce(
          (sum, order) => sum + order.total,
          0
        );

        // Hitung rata-rata order
        const averageOrder =
          orders.length > 0 ? totalRevenue / orders.length : 0;

        // Update tampilan
        document.getElementById(
          "totalRevenue"
        ).textContent = `Rp ${totalRevenue.toLocaleString()}`;
        document.getElementById("averageOrder").textContent = `Rp ${Math.round(
          averageOrder
        ).toLocaleString()}`;
        document.getElementById("totalTransactions").textContent =
          orders.length;
      }

      function logout() {
        localStorage.removeItem("user");
        window.location.href = "../pages/login.html";
      }

      function exportToExcel() {
        const orders = JSON.parse(localStorage.getItem("orders")) || [];
        const products = JSON.parse(localStorage.getItem("products")) || [];

        // Buat data untuk Excel
        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "Tanggal,ID Pesanan,Produk,Jumlah,Harga,Total\n";

        orders.forEach((order) => {
          order.items.forEach((item) => {
            const product = products.find((p) => p.id === item.productId);
            csvContent += `${order.date},${order.id},${product.name},${
              item.quantity
            },${item.price},${item.quantity * item.price}\n`;
          });
        });

        // Download file
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "laporan_penjualan.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    </script>

    <style>
      .report-filter {
        display: flex;
        gap: 20px;
        margin-bottom: 20px;
      }

      .report-filter select {
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
      }

      .generate-btn {
        padding: 8px 15px;
        background: #2e7d32;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 5px;
      }

      .report-section {
        background: white;
        padding: 20px;
        border-radius: 8px;
        margin-bottom: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .financial-summary {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
      }

      .summary-card {
        background: #f8f9fa;
        padding: 15px;
        border-radius: 8px;
        text-align: center;
      }

      .summary-card h3 {
        color: #666;
        font-size: 0.9em;
        margin-bottom: 10px;
      }

      .summary-card p {
        color: #2e7d32;
        font-size: 1.2em;
        font-weight: bold;
      }

      .top-product-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        border-bottom: 1px solid #eee;
      }

      .top-product-item:last-child {
        border-bottom: none;
      }

      .product-revenue {
        color: #2e7d32;
        font-weight: bold;
      }

      #salesChart {
        width: 100%;
        height: 300px;
      }

      .date-filter {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .date-filter input[type="date"] {
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
      }
    </style>
  </body>
</html>
