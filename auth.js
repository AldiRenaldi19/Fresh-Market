class AuthManager {
  constructor() {
    this.isLoggedIn = false;
    this.currentUser = null;
    this.checkLoginStatus();
  }

  async login(email, password) {
    try {
      // Di sini nanti bisa ditambahkan integrasi dengan backend
      const response = await this.mockLoginRequest(email, password);

      if (response.success) {
        this.isLoggedIn = true;
        this.currentUser = response.user;
        localStorage.setItem("user", JSON.stringify(response.user));
        this.updateUIForLoggedInUser();
        return true;
      }
    } catch (error) {
      console.error("Login gagal:", error);
      return false;
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.currentUser = null;
    localStorage.removeItem("user");
    this.updateUIForLoggedOutUser();
  }

  checkLoginStatus() {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      this.isLoggedIn = true;
      this.currentUser = JSON.parse(savedUser);
      this.updateUIForLoggedInUser();
    }
  }

  updateUIForLoggedInUser() {
    const loginBtn = document.getElementById("loginBtn");
    if (loginBtn) {
      loginBtn.textContent = "Profil";
      loginBtn.href = "profile.html";
    }
  }

  updateUIForLoggedOutUser() {
    const loginBtn = document.getElementById("loginBtn");
    if (loginBtn) {
      loginBtn.textContent = "Masuk";
      loginBtn.href = "login.html";
    }
  }
}

// Inisialisasi auth manager
const authManager = new AuthManager();
