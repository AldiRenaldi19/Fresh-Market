// Tambahkan file baru init.js dan masukkan ke semua halaman
document.addEventListener("DOMContentLoaded", function () {
  // Inisialisasi data admin jika belum ada
  if (!localStorage.getItem("registeredUsers")) {
    const defaultAdmin = {
      name: "Admin",
      email: "admin@freshmarket.com",
      password: "admin123",
      isAdmin: true,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("registeredUsers", JSON.stringify([defaultAdmin]));
  }

  // Inisialisasi data orders jika belum ada
  if (!localStorage.getItem("orders")) {
    localStorage.setItem("orders", JSON.stringify([]));
  }

  // Inisialisasi data products jika belum ada
  if (!localStorage.getItem("products")) {
    const defaultProducts = [
      {
        id: "P001",
        name: "Wortel Organik",
        price: 15000,
        stock: 100,
        category: "Sayuran",
        description: "Wortel organik segar langsung dari petani",
        image: "../../assets/images/products/wortel.jpg",
        createdAt: new Date().toISOString(),
      },
      {
        id: "P002",
        name: "Tomat Segar",
        price: 12000,
        stock: 150,
        category: "Sayuran",
        description: "Tomat segar dan berkualitas",
        image: "../../assets/images/products/tomat.jpg",
        createdAt: new Date().toISOString(),
      },
      {
        id: "P003",
        name: "Jeruk Mandarin",
        price: 25000,
        stock: 80,
        category: "Buah",
        description: "Jeruk mandarin manis dan segar",
        image: "../../assets/images/products/jeruk.jpg",
        createdAt: new Date().toISOString(),
      },
      {
        id: "P004",
        name: "Jahe Merah",
        price: 8000,
        stock: 200,
        category: "Rempah",
        description: "Jahe merah berkhasiat untuk kesehatan",
        image: "../../assets/images/products/jahe.jpg",
        createdAt: new Date().toISOString(),
      },
      {
        id: "P005",
        name: "Apel Fuji",
        price: 30000,
        stock: 50,
        category: "Buah",
        description: "Apel fuji segar dengan rasa manis",
        image: "../../assets/images/products/apel.jpg",
        createdAt: new Date().toISOString(),
      },
      {
        id: "P006",
        name: "Bawang Merah",
        price: 45000,
        stock: 300,
        category: "Rempah",
        description: "Bawang merah berkualitas tinggi",
        image: "../../assets/images/products/bawang_merah.jpg",
        createdAt: new Date().toISOString(),
      },
    ];
    localStorage.setItem("products", JSON.stringify(defaultProducts));
  }

  // Inisialisasi data activities jika belum ada
  if (!localStorage.getItem("activities")) {
    localStorage.setItem("activities", JSON.stringify([]));
  }

  // Inisialisasi wishlist jika belum ada
  if (!localStorage.getItem("wishlist")) {
    localStorage.setItem("wishlist", JSON.stringify([]));
  }

  // Inisialisasi cart jika belum ada
  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify([]));
  }
});

// Fungsi helper untuk menambah aktivitas
function addActivity(type, desc) {
  const activities = JSON.parse(localStorage.getItem("activities")) || [];
  activities.unshift({
    type,
    desc,
    time: new Date().toISOString(),
    timestamp: Date.now(),
  });
  if (activities.length > 50) activities.pop(); // Batasi jumlah aktivitas
  localStorage.setItem("activities", JSON.stringify(activities));
}

// Fungsi untuk format waktu
function formatTime(timestamp) {
  const now = Date.now();
  const diff = now - timestamp;

  if (diff < 60000) return "Baru saja";
  if (diff < 3600000) return `${Math.floor(diff / 60000)} menit yang lalu`;
  if (diff < 86400000) return `${Math.floor(diff / 3600000)} jam yang lalu`;
  return new Date(timestamp).toLocaleDateString("id-ID");
}
