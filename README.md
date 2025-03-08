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

    <div class="box" data-aos="fade-up" data-delay="500" data-duration="1500">
        Fade Up (1.5s)
    </div>
</body>
</html>
