<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Alamat - Fresh Market</title>
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
        <h1>Alamat Pengiriman</h1>
        <button onclick="showAddAddressForm()" class="add-btn">
          <i class="fas fa-plus"></i> Tambah Alamat Baru
        </button>

        <div id="addressForm" style="display: none" class="address-form">
          <form onsubmit="saveAddress(event)">
            <div class="form-group">
              <label>Label Alamat</label>
              <input
                type="text"
                id="label"
                required
                placeholder="Rumah, Kantor, dll"
              />
            </div>
            <div class="form-group">
              <label>Nama Penerima</label>
              <input type="text" id="recipient" required />
            </div>
            <div class="form-group">
              <label>Nomor Telepon</label>
              <input type="tel" id="phone" required />
            </div>
            <div class="form-group">
              <label>Alamat Lengkap</label>
              <textarea id="fullAddress" required></textarea>
            </div>
            <div class="form-actions">
              <button type="submit" class="save-btn">Simpan</button>
              <button
                type="button"
                onclick="hideAddressForm()"
                class="cancel-btn"
              >
                Batal
              </button>
            </div>
          </form>
        </div>

        <div id="addressList" class="address-list">
          <!-- Daftar alamat akan ditampilkan di sini -->
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

        loadAddresses();
      });

      function loadAddresses() {
        const user = JSON.parse(localStorage.getItem("user"));
        const addresses = JSON.parse(localStorage.getItem("addresses")) || [];
        const userAddresses = addresses.filter(
          (addr) => addr.userId === user.email
        );

        const container = document.getElementById("addressList");
        container.innerHTML =
          userAddresses
            .map(
              (addr) => `
            <div class="address-card">
                <div class="address-header">
                    <h3>${addr.label}</h3>
                    <div class="address-actions">
                        <button onclick="editAddress('${addr.id}')" class="edit-btn">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button onclick="deleteAddress('${addr.id}')" class="delete-btn">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
                <div class="address-details">
                    <p><strong>${addr.recipient}</strong></p>
                    <p>${addr.phone}</p>
                    <p>${addr.fullAddress}</p>
                </div>
            </div>
        `
            )
            .join("") || "<p>Belum ada alamat tersimpan</p>";
      }

      function showAddAddressForm() {
        document.getElementById("addressForm").style.display = "block";
      }

      function hideAddressForm() {
        document.getElementById("addressForm").style.display = "none";
      }

      function saveAddress(event) {
        event.preventDefault();

        const user = JSON.parse(localStorage.getItem("user"));
        const addresses = JSON.parse(localStorage.getItem("addresses")) || [];

        const newAddress = {
          id: Date.now().toString(),
          userId: user.email,
          label: document.getElementById("label").value,
          recipient: document.getElementById("recipient").value,
          phone: document.getElementById("phone").value,
          fullAddress: document.getElementById("fullAddress").value,
        };

        addresses.push(newAddress);
        localStorage.setItem("addresses", JSON.stringify(addresses));

        hideAddressForm();
        loadAddresses();
        event.target.reset();
      }

      function deleteAddress(addressId) {
        if (!confirm("Apakah Anda yakin ingin menghapus alamat ini?")) return;

        let addresses = JSON.parse(localStorage.getItem("addresses")) || [];
        addresses = addresses.filter((addr) => addr.id !== addressId);
        localStorage.setItem("addresses", JSON.stringify(addresses));

        loadAddresses();
      }

      function editAddress(addressId) {
        // Implementasi edit alamat
        alert("Fitur edit alamat akan segera hadir!");
      }
    </script>

    <style>
      .add-btn {
        background: #2e7d32;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .address-form {
        background: white;
        padding: 20px;
        border-radius: 8px;
        margin-bottom: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .address-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        margin-bottom: 15px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .address-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
      }

      .address-actions {
        display: flex;
        gap: 10px;
      }

      .edit-btn,
      .delete-btn {
        padding: 5px 10px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }

      .edit-btn {
        background: #ffc107;
        color: #000;
      }

      .delete-btn {
        background: #dc3545;
        color: white;
      }

      .form-actions {
        display: flex;
        gap: 10px;
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
