<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Keranjang Belanja - Fresh Market</title>
    <link rel="stylesheet" href="../css/styles.css" />
  </head>
  <body>
    <div class="cart-container">
      <h1>Keranjang Belanja</h1>
      <div id="cart-items">
        <!-- Items akan ditampilkan melalui JavaScript -->
      </div>
      <div class="cart-summary">
        <div class="subtotal">
          <span>Subtotal:</span>
          <span id="cart-subtotal">Rp 0</span>
        </div>
        <div class="shipping">
          <span>Biaya Pengiriman:</span>
          <span id="shipping-cost">Rp 10.000</span>
        </div>
        <div class="total">
          <span>Total:</span>
          <span id="cart-total">Rp 0</span>
        </div>
        <button
          id="checkout-button"
          class="primary-button"
          onclick="window.location.href='checkout.html'"
        >
          Lanjut ke Pembayaran
        </button>
      </div>
    </div>

    <script>
      document.addEventListener("DOMContentLoaded", function () {
        const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        const cartItemsContainer = document.getElementById("cart-items");
        const subtotalElement = document.getElementById("cart-subtotal");
        const totalElement = document.getElementById("cart-total");

        function removeItem(productName) {
          const index = cartItems.findIndex(
            (item) => item.name === productName
          );
          if (index !== -1) {
            if (cartItems[index].quantity > 1) {
              cartItems[index].quantity -= 1;
            } else {
              cartItems.splice(index, 1);
            }
            localStorage.setItem("cart", JSON.stringify(cartItems));
            updateCart();
          }
        }

        function updateCart() {
          cartItemsContainer.innerHTML = "";
          let subtotal = 0;

          cartItems.forEach((item) => {
            subtotal += item.price * item.quantity;
            cartItemsContainer.innerHTML += `
              <div class="cart-item">
                <div class="cart-item-details">
                  <h3>${item.name}</h3>
                  <div class="quantity-controls">
                    <button onclick="decreaseQuantity('${
                      item.name
                    }')" class="quantity-btn">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button onclick="increaseQuantity('${
                      item.name
                    }')" class="quantity-btn">+</button>
                  </div>
                  <p>Rp ${item.price.toLocaleString()} x ${item.quantity}</p>
                  <p>Total: Rp ${(
                    item.price * item.quantity
                  ).toLocaleString()}</p>
                </div>
                <button onclick="removeItem('${item.name}')" class="remove-btn">
                  <i class="fas fa-trash"></i> Hapus
                </button>
              </div>
            `;
          });

          subtotalElement.textContent = `Rp ${subtotal.toLocaleString()}`;
          totalElement.textContent = `Rp ${(
            subtotal + 10000
          ).toLocaleString()}`;

          // Update cart count di navbar
          const cartCountElements = document.querySelectorAll(".cart-count");
          const totalItems = cartItems.reduce(
            (sum, item) => sum + item.quantity,
            0
          );
          cartCountElements.forEach((element) => {
            element.textContent = totalItems;
          });
        }

        // Fungsi untuk menambah/kurangi quantity
        window.increaseQuantity = function (productName) {
          const item = cartItems.find((item) => item.name === productName);
          if (item) {
            item.quantity += 1;
            localStorage.setItem("cart", JSON.stringify(cartItems));
            updateCart();
          }
        };

        window.decreaseQuantity = function (productName) {
          const item = cartItems.find((item) => item.name === productName);
          if (item && item.quantity > 1) {
            item.quantity -= 1;
            localStorage.setItem("cart", JSON.stringify(cartItems));
            updateCart();
          } else if (item && item.quantity === 1) {
            removeItem(productName);
          }
        };

        // Membuat fungsi removeItem tersedia secara global
        window.removeItem = removeItem;

        // Inisialisasi tampilan keranjang
        updateCart();
      });
    </script>

    <style>
      .cart-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        border-bottom: 1px solid #eee;
        margin-bottom: 10px;
      }

      .cart-item-details {
        flex-grow: 1;
      }

      .quantity-controls {
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 10px 0;
      }

      .quantity-btn {
        background: #2e7d32;
        color: white;
        border: none;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .quantity {
        font-weight: bold;
      }

      .remove-btn {
        background: #dc3545;
        color: white;
        border: none;
        padding: 8px 15px;
        border-radius: 4px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 5px;
      }

      .remove-btn:hover {
        background: #c82333;
      }
    </style>
  </body>
</html>
