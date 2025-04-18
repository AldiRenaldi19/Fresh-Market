const notificationSystem = {
  show(message, type = "info") {
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <p>${message}</p>
        <button onclick="this.parentElement.remove()">×</button>
      </div>
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  },

  showError(message) {
    this.show(message, "error");
  },

  showSuccess(message) {
    this.show(message, "success");
  },
};
