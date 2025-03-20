<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Profil - Fresh Market</title>
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
        <h1>Profil Saya</h1>
        <div class="profile-form">
          <form id="profileForm" onsubmit="updateProfile(event)">
            <div class="form-group">
              <label>Nama Lengkap</label>
              <input type="text" id="name" required />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="email" id="email" readonly />
            </div>
            <div class="form-group">
              <label>Nomor Telepon</label>
              <input type="tel" id="phone" />
            </div>
            <div class="form-group">
              <label>Alamat</label>
              <textarea id="address"></textarea>
            </div>
            <div class="form-group">
              <label>Password Baru (kosongkan jika tidak ingin mengubah)</label>
              <input type="password" id="newPassword" />
            </div>
            <button type="submit" class="save-btn">Simpan Perubahan</button>
          </form>
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

        // Isi form dengan data user
        document.getElementById("name").value = user.name;
        document.getElementById("email").value = user.email;
        document.getElementById("phone").value = user.phone || "";
        document.getElementById("address").value = user.address || "";
      });

      function updateProfile(event) {
        event.preventDefault();

        const user = JSON.parse(localStorage.getItem("user"));
        const registeredUsers =
          JSON.parse(localStorage.getItem("registeredUsers")) || [];

        const updatedUser = {
          ...user,
          name: document.getElementById("name").value,
          phone: document.getElementById("phone").value,
          address: document.getElementById("address").value,
        };

        // Update password jika diisi
        const newPassword = document.getElementById("newPassword").value;
        if (newPassword) {
          updatedUser.password = newPassword;
        }

        // Update di registeredUsers
        const userIndex = registeredUsers.findIndex(
          (u) => u.email === user.email
        );
        if (userIndex !== -1) {
          registeredUsers[userIndex] = {
            ...registeredUsers[userIndex],
            ...updatedUser,
          };
          localStorage.setItem(
            "registeredUsers",
            JSON.stringify(registeredUsers)
          );
        }

        // Update user saat ini
        localStorage.setItem("user", JSON.stringify(updatedUser));

        alert("Profil berhasil diperbarui!");
        window.location.reload();
      }
    </script>

    <style>
      .profile-form {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .form-group {
        margin-bottom: 20px;
      }

      .form-group label {
        display: block;
        margin-bottom: 5px;
        color: #666;
      }

      .form-group input,
      .form-group textarea {
        width: 100%;
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
      }

      .save-btn {
        background: #2e7d32;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background 0.3s ease;
      }

      .save-btn:hover {
        background: #1b5e20;
      }
    </style>
  </body>
</html>
