<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Checkout - Fresh Market</title>
    <link rel="stylesheet" href="../css/styles.css" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
    />
  </head>
  <body>
    <div class="checkout-container">
      <h1>Checkout</h1>

      <div class="checkout-sections">
        <!-- Ringkasan Pesanan -->
        <div class="order-summary">
          <h2>Ringkasan Pesanan</h2>
          <div id="checkout-items"></div>
          <div class="price-summary">
            <div class="subtotal">
              <span>Subtotal</span>
              <span id="checkout-subtotal">Rp 0</span>
            </div>
            <div class="shipping">
              <span>Biaya Pengiriman</span>
              <span id="checkout-shipping">Rp 10.000</span>
            </div>
            <div class="total">
              <span>Total Pembayaran</span>
              <span id="checkout-total">Rp 0</span>
            </div>
          </div>
        </div>

        <!-- Form Checkout -->
        <form id="checkout-form" class="checkout-form">
          <h2>Informasi Pengiriman</h2>
          <div class="form-group">
            <label for="name">Nama Lengkap</label>
            <input type="text" id="name" required />
          </div>

          <div class="form-group">
            <label for="phone">Nomor Telepon</label>
            <input type="tel" id="phone" required />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" required />
          </div>

          <div class="form-group">
            <label for="address">Alamat Lengkap</label>
            <textarea id="address" required></textarea>
          </div>

          <h2>Metode Pembayaran</h2>
          <div class="payment-methods">
            <div class="payment-option">
              <input
                type="radio"
                id="transfer"
                name="payment"
                value="transfer"
                required
              />
              <label for="transfer">Transfer Bank</label>
            </div>
            <div class="payment-option">
              <input type="radio" id="ewallet" name="payment" value="ewallet" />
              <label for="ewallet">E-Wallet</label>
            </div>
            <div class="payment-option">
              <input type="radio" id="cod" name="payment" value="cod" />
              <label for="cod">Bayar di Tempat (COD)</label>
            </div>
          </div>

          <button type="submit" class="checkout-button">
            Selesaikan Pembayaran
          </button>
        </form>
      </div>
    </div>

    <script>
      document.addEventListener("DOMContentLoaded", function () {
        // Ambil data keranjang dari localStorage
        const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        const checkoutItems = document.getElementById("checkout-items");
        const subtotalElement = document.getElementById("checkout-subtotal");
        const totalElement = document.getElementById("checkout-total");

        // Tampilkan item checkout
        function displayCheckoutItems() {
          let subtotal = 0;
          checkoutItems.innerHTML = "";

          cartItems.forEach((item) => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;

            checkoutItems.innerHTML += `
                    <div class="checkout-item">
                        <span class="item-name">${item.name}</span>
                        <span class="item-quantity">x${item.quantity}</span>
                        <span class="item-price">Rp ${itemTotal.toLocaleString()}</span>
                    </div>
                `;
          });

          subtotalElement.textContent = `Rp ${subtotal.toLocaleString()}`;
          totalElement.textContent = `Rp ${(
            subtotal + 10000
          ).toLocaleString()}`;
        }

        displayCheckoutItems();

        // Handle form submission
        const checkoutForm = document.getElementById("checkout-form");
        checkoutForm.addEventListener("submit", async function (e) {
          e.preventDefault();

          const formData = {
            name: document.getElementById("name").value,
            phone: document.getElementById("phone").value,
            email: document.getElementById("email").value,
            address: document.getElementById("address").value,
            paymentMethod: document.querySelector(
              'input[name="payment"]:checked'
            ).value,
            items: cartItems,
            total: parseFloat(totalElement.textContent.replace(/[^\d]/g, "")),
          };

          try {
            // Di sini nanti bisa ditambahkan integrasi dengan backend
            alert("Pesanan berhasil! Terima kasih telah berbelanja.");
            localStorage.removeItem("cart"); // Kosongkan keranjang
            window.location.href = "order-success.html"; // Redirect ke halaman sukses
          } catch (error) {
            alert("Terjadi kesalahan. Silakan coba lagi.");
          }
        });
      });
    </script>

    <style>
      .checkout-container {
        max-width: 1200px;
        margin: 40px auto;
        padding: 20px;
      }

      .checkout-sections {
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        gap: 40px;
        margin-top: 30px;
      }

      .order-summary {
        background: #f8f9fa;
        padding: 20px;
        border-radius: 8px;
      }

      .checkout-item {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        border-bottom: 1px solid #eee;
      }

      .checkout-form {
        background: white;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }

      .form-group {
        margin-bottom: 20px;
      }

      .form-group label {
        display: block;
        margin-bottom: 5px;
        font-weight: 500;
      }

      .form-group input,
      .form-group textarea {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
      }

      .payment-methods {
        margin: 20px 0;
      }

      .payment-option {
        margin: 10px 0;
      }

      .checkout-button {
        width: 100%;
        padding: 15px;
        background: #2e7d32;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
        transition: background 0.3s;
      }

      .checkout-button:hover {
        background: #1b5e20;
      }

      @media (max-width: 768px) {
        .checkout-sections {
          grid-template-columns: 1fr;
        }
      }
    </style>
  </body>
</html>
