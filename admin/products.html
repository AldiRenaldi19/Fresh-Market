<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Kelola Produk - Admin Fresh Market</title>
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
          <h1>Kelola Produk</h1>
          <button onclick="showAddProductModal()" class="add-btn">
            <i class="fas fa-plus"></i> Tambah Produk
          </button>
        </div>

        <div class="products-filter">
          <input type="text" id="searchProduct" placeholder="Cari produk..." />
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

    <!-- Modal Tambah/Edit Produk -->
    <div id="productModal" class="modal">
      <div class="modal-content">
        <span
          class="close"
          onclick="document.getElementById('productModal').style.display='none'"
          >&times;</span
        >
        <h2 id="modalTitle">Tambah Produk Baru</h2>
        <form id="productForm" onsubmit="saveProduct(event)">
          <input type="hidden" id="productId" />
          <div class="form-group">
            <label for="productName">Nama Produk</label>
            <input type="text" id="productName" class="form-control" required />
          </div>
          <div class="form-group">
            <label for="productCategory">Kategori</label>
            <select id="productCategory" class="form-control">
              <option value="">Pilih Kategori</option>
              <option value="Sayuran">Sayuran</option>
              <option value="Buah">Buah</option>
              <option value="Rempah">Rempah</option>
            </select>
          </div>
          <div class="form-group">
            <label for="productPrice">Harga (Rp)</label>
            <input
              type="number"
              id="productPrice"
              class="form-control"
              required
              min="0"
            />
          </div>
          <div class="form-group">
            <label for="productStock">Stok</label>
            <input
              type="number"
              id="productStock"
              class="form-control"
              required
              min="0"
            />
          </div>
          <div class="form-group">
            <label for="productImage">URL Gambar</label>
            <input
              type="text"
              id="productImage"
              class="form-control"
              placeholder="../../assets/images/products/nama-file.jpg"
            />
          </div>
          <div class="form-group">
            <label for="productDescription">Deskripsi</label>
            <textarea
              id="productDescription"
              class="form-control"
              rows="4"
            ></textarea>
          </div>
          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Simpan</button>
            <button
              type="button"
              class="btn btn-secondary"
              onclick="document.getElementById('productModal').style.display='none'"
            >
              Batal
            </button>
          </div>
        </form>
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

        loadProducts();

        // Event listeners
        document
          .getElementById("searchProduct")
          .addEventListener("input", loadProducts);
        document
          .getElementById("categoryFilter")
          .addEventListener("change", loadProducts);
        document
          .getElementById("productForm")
          .addEventListener("submit", saveProduct);
      });

      function loadProducts() {
        const products = JSON.parse(localStorage.getItem("products")) || [];
        const searchTerm = document
          .getElementById("searchProduct")
          .value.toLowerCase();
        const selectedCategory =
          document.getElementById("categoryFilter").value;

        const filteredProducts = products.filter((product) => {
          const matchSearch = product.name.toLowerCase().includes(searchTerm);
          const matchCategory =
            !selectedCategory || product.category === selectedCategory;
          return matchSearch && matchCategory;
        });

        const container = document.getElementById("productsContainer");
        container.innerHTML = filteredProducts
          .map(
            (product) => `
                <div class="product-card">
                    <img src="${
                      product.image || "../assets/images/default-product.png"
                    }" 
                         alt="${product.name}"
                         onerror="this.src='../assets/images/default-product.png'">
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p class="category">${product.category}</p>
                        <p class="price">Rp ${product.price.toLocaleString()}</p>
                        <p class="stock">Stok: ${product.stock}</p>
                        <div class="product-actions">
                            <button onclick="editProduct('${
                              product.id
                            }')" class="edit-btn">
                                <i class="fas fa-edit"></i> Edit
                            </button>
                            <button onclick="deleteProduct('${
                              product.id
                            }')" class="delete-btn">
                                <i class="fas fa-trash"></i> Hapus
                            </button>
                        </div>
                    </div>
                </div>
            `
          )
          .join("");
      }

      function showAddProductModal() {
        document.getElementById("modalTitle").textContent =
          "Tambah Produk Baru";
        document.getElementById("productForm").reset();
        document.getElementById("productId").value = "";
        document.getElementById("productModal").style.display = "block";
      }

      function closeModal() {
        document.getElementById("productModal").style.display = "none";
      }

      function saveProduct(e) {
        e.preventDefault();

        const productId = document.getElementById("productId").value;
        const name = document.getElementById("productName").value;
        const category = document.getElementById("productCategory").value;
        const price = parseFloat(document.getElementById("productPrice").value);
        const stock =
          parseInt(document.getElementById("productStock").value) || 0;
        const image =
          document.getElementById("productImage").value ||
          "../../assets/images/default-product.png";
        const description =
          document.getElementById("productDescription").value || "";

        const products = JSON.parse(localStorage.getItem("products")) || [];

        if (productId) {
          // Edit produk yang sudah ada
          const index = products.findIndex((p) => p.id === productId);
          if (index !== -1) {
            products[index] = {
              ...products[index],
              name,
              category,
              price,
              stock,
              image,
              description,
              updatedAt: new Date().toISOString(),
            };
            addActivity("product", `Produk ${name} telah diperbarui`);
          }
        } else {
          // Tambah produk baru
          const newProduct = {
            id: "P" + Date.now().toString().slice(-6),
            name,
            category,
            price,
            stock,
            image,
            description,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          };

          products.push(newProduct);
          addActivity("product", `Produk baru ${name} telah ditambahkan`);
        }

        localStorage.setItem("products", JSON.stringify(products));
        document.getElementById("productModal").style.display = "none";
        loadProducts();
      }

      function editProduct(productId) {
        const products = JSON.parse(localStorage.getItem("products")) || [];
        const product = products.find((p) => p.id === productId);

        if (!product) return;

        document.getElementById("modalTitle").textContent = "Edit Produk";
        document.getElementById("productId").value = product.id;
        document.getElementById("productName").value = product.name;
        document.getElementById("productCategory").value =
          product.category || "";
        document.getElementById("productPrice").value = product.price;
        document.getElementById("productStock").value = product.stock || 0;
        document.getElementById("productImage").value = product.image || "";
        document.getElementById("productDescription").value =
          product.description || "";

        document.getElementById("productModal").style.display = "block";
      }

      function deleteProduct(productId) {
        if (confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
          const products = JSON.parse(localStorage.getItem("products")) || [];
          const updatedProducts = products.filter((p) => p.id !== productId);

          localStorage.setItem("products", JSON.stringify(updatedProducts));

          // Tambahkan aktivitas
          addActivity("product", `Produk dengan ID ${productId} telah dihapus`);

          loadProducts();
        }
      }

      // Fungsi untuk mencatat aktivitas
      function addActivity(type, description) {
        const activities = JSON.parse(localStorage.getItem("activities")) || [];
        activities.unshift({
          type,
          description,
          timestamp: new Date().toISOString(),
        });

        // Batasi jumlah aktivitas yang disimpan
        if (activities.length > 100) {
          activities.pop();
        }

        localStorage.setItem("activities", JSON.stringify(activities));
      }
    </script>

    <style>
      .products-filter {
        display: flex;
        gap: 20px;
        margin-bottom: 20px;
      }

      .products-filter input,
      .products-filter select {
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
      }

      .products-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
      }

      .product-card {
        background: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .product-card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      .product-info {
        padding: 15px;
      }

      .product-actions {
        display: flex;
        gap: 10px;
        margin-top: 10px;
      }

      .edit-btn,
      .delete-btn {
        padding: 5px 10px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }

      .edit-btn {
        background: #2e7d32;
        color: white;
      }

      .delete-btn {
        background: #dc3545;
        color: white;
      }

      .modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
      }

      .modal-content {
        background: white;
        padding: 20px;
        border-radius: 8px;
        width: 90%;
        max-width: 500px;
        margin: 50px auto;
      }

      .form-group {
        margin-bottom: 15px;
      }

      .form-group label {
        display: block;
        margin-bottom: 5px;
      }

      .form-group input,
      .form-group select {
        width: 100%;
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
      }

      .modal-buttons {
        display: flex;
        gap: 10px;
        justify-content: flex-end;
        margin-top: 20px;
      }

      .save-btn,
      .cancel-btn {
        padding: 8px 15px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }

      .save-btn {
        background: #2e7d32;
        color: white;
      }

      .cancel-btn {
        background: #6c757d;
        color: white;
      }
    </style>
  </body>
</html>
