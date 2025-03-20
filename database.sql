resh-market/
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── css/
│   ├── styles.css
│   ├── products.css
│   └── components.css
├── js/
│   ├── main.js
│   ├── cart.js
│   └── auth.js
├── pages/
│   ├── index.html
│   ├── products.html
│   ├── login.html
│   ├── cart.html
│   ├── checkout.html
│   └── profile.html
└── database.sql

-- Membuat database
CREATE DATABASE fresh_market_db;
USE fresh_market_db;

-- Tabel Users (Pengguna)
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    phone_number VARCHAR(15),
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    role ENUM('customer', 'admin', 'staff') DEFAULT 'customer'
);

-- Tabel Categories (Kategori Produk)
CREATE TABLE categories (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabel Products (Produk)
CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    category_id INT,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT NOT NULL DEFAULT 0,
    unit VARCHAR(20) NOT NULL, -- (e.g., kg, ikat, pack)
    image_url VARCHAR(255),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

-- Tabel Orders (Pesanan)
CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    total_amount DECIMAL(10,2) NOT NULL,
    shipping_address TEXT NOT NULL,
    order_status ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',
    payment_status ENUM('unpaid', 'paid', 'failed', 'refunded') DEFAULT 'unpaid',
    payment_method VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Tabel Order Items (Detail Pesanan)
CREATE TABLE order_items (
    order_item_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT,
    product_id INT,
    quantity INT NOT NULL,
    price_per_unit DECIMAL(10,2) NOT NULL,
    subtotal DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- Tabel Cart (Keranjang Belanja)
CREATE TABLE cart (
    cart_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    product_id INT,
    quantity INT NOT NULL DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- Tabel Reviews (Ulasan Produk)
CREATE TABLE reviews (
    review_id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    user_id INT,
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Insert data kategori awal
INSERT INTO categories (name, description) VALUES
('Sayuran Daun', 'Berbagai jenis sayuran daun segar'),
('Sayuran Buah', 'Sayuran berbentuk buah'),
('Sayuran Umbi', 'Sayuran jenis umbi-umbian'),
('Bumbu Dapur', 'Berbagai bumbu untuk memasak');

-- Insert contoh produk
INSERT INTO products (category_id, name, description, price, stock_quantity, unit, image_url) VALUES
(1, 'Bayam Organik', 'Bayam segar organik', 8000.00, 50, 'ikat', 'bayam.jpg'),
(2, 'Tomat Cherry', 'Tomat cherry segar', 15000.00, 75, 'pack', 'tomat.jpg'),
(3, 'Wortel', 'Wortel segar', 12000.00, 100, 'kg', 'wortel.jpg'),
(4, 'Bawang Merah', 'Bawang merah pilihan', 40000.00, 200, 'kg', 'bawang.jpg');

-- Membuat index untuk optimasi query
CREATE INDEX idx_user_email ON users(email);
CREATE INDEX idx_product_category ON products(category_id);
CREATE INDEX idx_order_user ON orders(user_id);
CREATE INDEX idx_order_status ON orders(order_status);