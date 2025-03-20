class CartManager {
  constructor() {
    this.items = JSON.parse(localStorage.getItem("cart")) || [];
    this.total = 0;
    this.init();
  }

  init() {
    this.updateCartDisplay();
    this.attachEventListeners();
  }

  addItem(product) {
    const existingItem = this.items.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }

    this.saveCart();
    this.updateCartDisplay();
  }

  removeItem(productId) {
    this.items = this.items.filter((item) => item.id !== productId);
    this.saveCart();
    this.updateCartDisplay();
  }

  updateQuantity(productId, quantity) {
    const item = this.items.find((item) => item.id === productId);
    if (item) {
      item.quantity = quantity;
      this.saveCart();
      this.updateCartDisplay();
    }
  }

  calculateTotal() {
    return this.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  saveCart() {
    localStorage.setItem("cart", JSON.stringify(this.items));
  }

  updateCartDisplay() {
    const cartCount = document.querySelector(".cart-count");
    const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
  }
}

// Inisialisasi cart manager
const cartManager = new CartManager();
