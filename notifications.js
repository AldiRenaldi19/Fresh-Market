class NotificationSystem {
  constructor() {
    this.notifications = [];
  }

  showNotification(message, type = "info") {
    const notification = {
      id: Date.now(),
      message,
      type,
    };

    const notificationElement = `
            <div class="notification ${type}" id="notif-${notification.id}">
                <p>${message}</p>
                <button onclick="notificationSystem.closeNotification(${notification.id})">
                    ×
                </button>
            </div>
        `;

    document.getElementById("notification-container").innerHTML +=
      notificationElement;

    // Otomatis hilang setelah 5 detik
    setTimeout(() => {
      this.closeNotification(notification.id);
    }, 5000);
  }

  closeNotification(id) {
    const element = document.getElementById(`notif-${id}`);
    if (element) element.remove();
  }
}
