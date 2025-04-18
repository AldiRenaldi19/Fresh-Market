// Sistem keranjang belanja
class ShoppingCart {
  constructor() {
    this.items = [];
    this.total = 0;
  }

  addItem(product) {
    this.items.push(product);
    this.calculateTotal();
  }

  removeItem(productId) {
    this.items = this.items.filter((item) => item.id !== productId);
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.items.reduce((sum, item) => sum + item.price, 0);
  }
}

// Inisialisasi keranjang
const cart = new ShoppingCart();

// Cart management
class Cart {
  constructor() {
    this.items = JSON.parse(localStorage.getItem("cart")) || [];
  }

  // Tambah item ke keranjang
  async addItem(userId, product, quantity = 1) {
    try {
      // Cek stok dulu
      const currentStock = await this.checkProductStock(product.id);
      if (currentStock < quantity) {
        throw new Error("Stok tidak mencukupi");
      }

      const existingItem = this.items.find(
        (item) => item.userId === userId && item.id === product.id
      );

      if (existingItem) {
        if (existingItem.quantity + quantity > currentStock) {
          throw new Error("Jumlah melebihi stok tersedia");
        }
        existingItem.quantity += quantity;
      } else {
        this.items.push({
          userId,
          ...product,
          quantity,
          addedAt: new Date().toISOString(),
        });
      }

      this.saveCart();
      showSuccess("Produk berhasil ditambahkan");
      return true;
    } catch (error) {
      showError(error.message);
      return false;
    }
  }

  // Hapus item dari keranjang
  removeItem(userId, productId) {
    this.items = this.items.filter(
      (item) => !(item.userId === userId && item.id === productId)
    );
    this.saveCart();
  }

  // Update jumlah item
  updateQuantity(userId, productId, quantity) {
    const item = this.items.find(
      (item) => item.userId === userId && item.id === productId
    );

    if (item) {
      item.quantity = quantity;
      this.saveCart();
    }
  }

  // Ambil keranjang untuk user tertentu
  getUserCart(userId) {
    return this.items.filter((item) => item.userId === userId);
  }

  // Hitung total harga
  getTotal(userId) {
    return this.getUserCart(userId).reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  // Hapus semua item user tertentu (checkout)
  clearUserCart(userId) {
    this.items = this.items.filter((item) => item.userId !== userId);
    this.saveCart();
  }

  // Simpan ke localStorage
  saveCart() {
    localStorage.setItem("cart", JSON.stringify(this.items));
  }
}

// Inisialisasi cart global
const cart = new Cart();
