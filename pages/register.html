<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Daftar - Fresh Market</title>
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
    <div class="container">
      <div class="left-side">
        <h1>Fresh Market</h1>
        <h2>Bergabunglah dengan Kami</h2>
        <p>Nikmati kemudahan berbelanja sayuran segar langsung dari petani</p>
      </div>
      <div class="right-side">
        <form id="registerForm">
          <h1>Daftar Akun Baru</h1>

          <div class="form-group">
            <label for="name">Nama Lengkap</label>
            <input type="text" id="name" required minlength="3" />
            <small class="error-message"></small>
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" required />
            <small class="error-message"></small>
          </div>

          <div class="form-group">
            <label for="phone">Nomor Telepon</label>
            <input type="tel" id="phone" required pattern="[0-9]{10,13}" />
            <small class="error-message"></small>
          </div>

          <div class="form-group">
            <label for="password">Kata Sandi</label>
            <div class="password-input">
              <input type="password" id="password" required minlength="8" />
              <i class="fas fa-eye-slash toggle-password"></i>
            </div>
            <small class="error-message"></small>
          </div>

          <div class="form-group">
            <label for="confirm-password">Konfirmasi Kata Sandi</label>
            <div class="password-input">
              <input type="password" id="confirm-password" required />
              <i class="fas fa-eye-slash toggle-password"></i>
            </div>
            <small class="error-message"></small>
          </div>

          <button type="submit" class="register-button">
            <span class="button-text">Daftar</span>
            <span class="loading-spinner"></span>
          </button>

          <div class="options">
            <p>Sudah punya akun? <a href="login.html">Masuk di sini</a></p>
          </div>
        </form>
      </div>
    </div>

    <style>
      .form-group {
        margin-bottom: 20px;
        position: relative;
      }

      .form-group input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 16px;
      }

      .error-message {
        color: #dc3545;
        font-size: 12px;
        margin-top: 5px;
        display: block;
      }

      .password-input {
        position: relative;
      }

      .toggle-password {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        color: #666;
      }

      .register-button {
        width: 100%;
        padding: 12px;
        background: #2e7d32;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .register-button:hover {
        background: #1b5e20;
      }

      .register-button:disabled {
        background: #ccc;
        cursor: not-allowed;
      }

      .loading-spinner {
        display: none;
        width: 20px;
        height: 20px;
        border: 2px solid #fff;
        border-top: 2px solid transparent;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        position: absolute;
        right: 10px;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      .register-button.loading .button-text {
        visibility: hidden;
      }

      .register-button.loading .loading-spinner {
        display: block;
      }
    </style>

    <script>
      document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("registerForm");
        const passwordToggles = document.querySelectorAll(".toggle-password");
        const registerButton = document.querySelector(".register-button");

        // Toggle password visibility
        passwordToggles.forEach((toggle) => {
          toggle.addEventListener("click", function () {
            const input = this.previousElementSibling;
            const type =
              input.getAttribute("type") === "password" ? "text" : "password";
            input.setAttribute("type", type);
            this.classList.toggle("fa-eye");
            this.classList.toggle("fa-eye-slash");
          });
        });

        // Validasi form
        function validateForm() {
          let isValid = true;
          const name = document.getElementById("name");
          const email = document.getElementById("email");
          const phone = document.getElementById("phone");
          const password = document.getElementById("password");
          const confirmPassword = document.getElementById("confirm-password");

          // Reset error messages
          document
            .querySelectorAll(".error-message")
            .forEach((error) => (error.textContent = ""));

          // Validasi nama
          if (name.value.length < 3) {
            showError(name, "Nama harus minimal 3 karakter");
            isValid = false;
          }

          // Validasi email
          if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            showError(email, "Format email tidak valid");
            isValid = false;
          }

          // Validasi nomor telepon
          if (!phone.value.match(/^[0-9]{10,13}$/)) {
            showError(phone, "Nomor telepon harus 10-13 digit");
            isValid = false;
          }

          // Validasi password
          if (password.value.length < 8) {
            showError(password, "Password minimal 8 karakter");
            isValid = false;
          }

          // Validasi konfirmasi password
          if (password.value !== confirmPassword.value) {
            showError(confirmPassword, "Password tidak cocok");
            isValid = false;
          }

          return isValid;
        }

        function showError(input, message) {
          const errorElement = input.nextElementSibling;
          if (errorElement.classList.contains("error-message")) {
            errorElement.textContent = message;
          } else {
            input.parentElement.nextElementSibling.textContent = message;
          }
        }

        // Handle form submission
        form.addEventListener("submit", async function (e) {
          e.preventDefault();

          if (!validateForm()) {
            return;
          }

          registerButton.classList.add("loading");
          registerButton.disabled = true;

          try {
            const formData = {
              name: document.getElementById("name").value,
              email: document.getElementById("email").value,
              phone: document.getElementById("phone").value,
              password: document.getElementById("password").value,
              isAdmin: false, // default role adalah user biasa
            };

            // Ambil data users yang sudah ada
            const registeredUsers =
              JSON.parse(localStorage.getItem("registeredUsers")) || [];

            // Cek apakah email sudah terdaftar
            if (registeredUsers.some((user) => user.email === formData.email)) {
              alert("Email sudah terdaftar. Silakan gunakan email lain.");
              return;
            }

            // Tambahkan user baru ke daftar
            registeredUsers.push(formData);

            // Simpan kembali ke localStorage
            localStorage.setItem(
              "registeredUsers",
              JSON.stringify(registeredUsers)
            );

            alert("Pendaftaran berhasil! Silakan login.");
            window.location.href = "login.html";
          } catch (error) {
            console.error("Error during registration:", error);
            alert("Terjadi kesalahan. Silakan coba lagi.");
          } finally {
            registerButton.classList.remove("loading");
            registerButton.disabled = false;
          }
        });
      });
    </script>
  </body>
</html>
