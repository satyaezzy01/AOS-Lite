# AOS-Lite

**AOS-Lite** adalah library JavaScript ringan yang memungkinkan elemen muncul dengan efek animasi seperti fade, slide, dan opacity saat masuk ke viewport. Library ini terinspirasi dari AOS, tetapi lebih fleksibel dan optimal, memungkinkan pengaturan **delay**, **durasi**, dan **jenis animasi** dengan mudah menggunakan atribut `data-aos`.

## 🚀 Fitur Utama
- Animasi masuk saat elemen muncul di layar.
- Dukungan untuk **fade-left, fade-right, fade-up, fade-down,** dan **opacity**.
- Pengaturan **delay** dan **durasi** langsung melalui atribut HTML.
- Tidak memerlukan dependensi eksternal.
- Ringan dan mudah digunakan.

## 📌 Cara Menggunakan
### 1️⃣ Tambahkan Script ke Halaman HTML
Sisipkan script berikut langsung di dalam halaman HTML Anda:
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AOS-Lite Demo</title>
     <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            min-height: 100vh;
            gap: 20px;
        }
        .card {
            width: 300px;
            padding: 20px;
            background: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            text-align: center;
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .card h2 {
            font-size: 20px;
            margin-bottom: 10px;
        }
        .card p {
            font-size: 16px;
            color: #777;
        }
        .show {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
    <script defer>
        document.addEventListener("DOMContentLoaded", function () {
            console.log("Script loaded!");
        
            let elements = document.querySelectorAll("[data-aos]"); // Ambil semua elemen dengan data-aos
            console.log(`Found ${elements.length} elements`);
        
            function animateElements() {
                elements.forEach((el) => {
                    let animationType = el.getAttribute("data-aos");
                    let delay = parseInt(el.getAttribute("data-delay") || 0); // Ambil delay (default 0 ms)
                    let duration = parseInt(el.getAttribute("data-duration") || 800); // Ambil durasi (default 800 ms)
                    let rect = el.getBoundingClientRect();
                    let inViewport = rect.top < window.innerHeight && rect.bottom > 0; // Cek apakah elemen dalam viewport
        
                    if (inViewport) {
                        el.style.opacity = "1";
                        el.style.transition = `all ${duration}ms ease ${delay}ms`; // Atur delay + durasi animasi
        
                        if (animationType === "fade-left") {
                            el.style.transform = "translateX(0)";
                        } else if (animationType === "fade-right") {
                            el.style.transform = "translateX(0)";
                        } else if (animationType === "fade-up") {
                            el.style.transform = "translateY(0)";
                        } else if (animationType === "fade-down") {
                            el.style.transform = "translateY(0)";
                        } else if (animationType === "opacity") {
                            el.style.transform = "scale(1)";
                        }
                    } else {
                        // Reset animasi agar bisa jalan lagi saat masuk viewport
                        el.style.opacity = "0";
        
                        if (animationType === "fade-left") {
                            el.style.transform = "translateX(-50px)";
                        } else if (animationType === "fade-right") {
                            el.style.transform = "translateX(50px)";
                        } else if (animationType === "fade-up") {
                            el.style.transform = "translateY(50px)";
                        } else if (animationType === "fade-down") {
                            el.style.transform = "translateY(-50px)";
                        } else if (animationType === "opacity") {
                            el.style.transform = "scale(0.9)";
                        }
                    }
                });
            }
        
            // **Jalankan animasi langsung saat halaman di-load**
            animateElements();
        
            // **Tambahkan event listener untuk mendeteksi scroll**
            window.addEventListener("scroll", animateElements);
        });
    </script>
</head>
<body>
    <div class="card" data-aos="fade-left" data-delay="300" data-duration="1000">
        <h2>Produk A</h2>
        <p>Harga: Rp100.000</p>
    </div>

    <div class="card" data-aos="fade-right" data-delay="500" data-duration="1000">
        <h2>Produk B</h2>
        <p>Harga: Rp150.000</p>
    </div>
    <div class="card" data-aos="fade-down" data-delay="500" data-duration="1000">
        <h2>Produk B</h2>
        <p>Harga: Rp150.000</p>
    </div>
    <div class="card" data-aos="fade-up" data-delay="500" data-duration="1000">
        <h2>Produk B</h2>
        <p>Harga: Rp150.000</p>
    </div>
    <div class="card" data-aos="opacity" data-delay="500" data-duration="1000">
        <h2>Produk B</h2>
        <p>Harga: Rp150.000</p>
    </div>
    <div class="card" data-aos="fade-left" data-delay="300" data-duration="1000">
        <h2>Produk A</h2>
        <p>Harga: Rp100.000</p>
    </div>

    <div class="card" data-aos="fade-right" data-delay="500" data-duration="1000">
        <h2>Produk B</h2>
        <p>Harga: Rp150.000</p>
    </div>
    <div class="card" data-aos="fade-down" data-delay="500" data-duration="1000">
        <h2>Produk B</h2>
        <p>Harga: Rp150.000</p>
    </div>
    <div class="card" data-aos="fade-up" data-delay="500" data-duration="1000">
        <h2>Produk B</h2>
        <p>Harga: Rp150.000</p>
    </div>
    <div class="card" data-aos="opacity" data-delay="500" data-duration="1000">
        <h2>Produk B</h2>
        <p>Harga: Rp150.000</p>
    </div>
    <div class="card" data-aos="fade-left" data-delay="300" data-duration="1000">
        <h2>Produk A</h2>
        <p>Harga: Rp100.000</p>
    </div>

    <div class="card" data-aos="fade-right" data-delay="500" data-duration="1000">
        <h2>Produk B</h2>
        <p>Harga: Rp150.000</p>
    </div>
    <div class="card" data-aos="fade-down" data-delay="500" data-duration="1000">
        <h2>Produk B</h2>
        <p>Harga: Rp150.000</p>
    </div>
    <div class="card" data-aos="fade-up" data-delay="500" data-duration="1000">
        <h2>Produk B</h2>
        <p>Harga: Rp150.000</p>
    </div>
    <div class="card" data-aos="opacity" data-delay="500" data-duration="1000">
        <h2>Produk B</h2>
        <p>Harga: Rp150.000</p>
    </div>
    <div class="card" data-aos="fade-left" data-delay="300" data-duration="1000">
        <h2>Produk A</h2>
        <p>Harga: Rp100.000</p>
    </div>

    <div class="card" data-aos="fade-right" data-delay="500" data-duration="1000">
        <h2>Produk B</h2>
        <p>Harga: Rp150.000</p>
    </div>
    <div class="card" data-aos="fade-down" data-delay="500" data-duration="1000">
        <h2>Produk B</h2>
        <p>Harga: Rp150.000</p>
    </div>
    <div class="card" data-aos="fade-up" data-delay="500" data-duration="1000">
        <h2>Produk B</h2>
        <p>Harga: Rp150.000</p>
    </div>
    <div class="card" data-aos="opacity" data-delay="500" data-duration="1000">
        <h2>Produk B</h2>
        <p>Harga: Rp150.000</p>
    </div>
    <div class="card" data-aos="fade-left" data-delay="300" data-duration="1000">
        <h2>Produk A</h2>
        <p>Harga: Rp100.000</p>
    </div>

    <div class="card" data-aos="fade-right" data-delay="500" data-duration="1000">
        <h2>Produk B</h2>
        <p>Harga: Rp150.000</p>
    </div>
    <div class="card" data-aos="fade-down" data-delay="500" data-duration="1000">
        <h2>Produk B</h2>
        <p>Harga: Rp150.000</p>
    </div>
    <div class="card" data-aos="fade-up" data-delay="500" data-duration="1000">
        <h2>Produk B</h2>
        <p>Harga: Rp150.000</p>
    </div>
    <div class="card" data-aos="opacity" data-delay="500" data-duration="1000">
        <h2>Produk B</h2>
        <p>Harga: Rp150.000</p>
    </div>

</body>
</html>
