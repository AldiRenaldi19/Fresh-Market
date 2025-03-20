class ProductReview {
  constructor(productId) {
    this.productId = productId;
    this.reviews = [];
  }

  addReview(rating, comment, userId) {
    const review = {
      id: Date.now(),
      rating,
      comment,
      userId,
      date: new Date(),
    };
    this.reviews.push(review);
    this.updateAverageRating();
  }

  updateAverageRating() {
    const total = this.reviews.reduce((sum, review) => sum + review.rating, 0);
    this.averageRating = total / this.reviews.length;
  }
}
