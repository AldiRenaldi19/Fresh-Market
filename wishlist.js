class WishlistManager {
  constructor() {
    this.wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  }

  toggleWishlist(productId) {
    const index = this.wishlist.indexOf(productId);
    if (index === -1) {
      this.wishlist.push(productId);
    } else {
      this.wishlist.splice(index, 1);
    }
    this.saveWishlist();
    this.updateWishlistUI();
  }

  saveWishlist() {
    localStorage.setItem("wishlist", JSON.stringify(this.wishlist));
  }

  updateWishlistUI() {
    const wishlistButtons = document.querySelectorAll(".wishlist-btn");
    wishlistButtons.forEach((button) => {
      const productId = button.dataset.productId;
      button.classList.toggle("active", this.wishlist.includes(productId));
    });
  }
}
